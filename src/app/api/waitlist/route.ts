import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/utils/rate-limit';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null;

const limiter = rateLimit({
  maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5', 10),
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = limiter(request);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(5),
            'X-RateLimit-Remaining': String(rateLimitResult.remaining),
            'X-RateLimit-Reset': String(rateLimitResult.resetTime),
          },
        }
      );
    }

    const payload = await request.json();
    const { email, name, role } = payload ?? {};

    // Validation
    if (!email || typeof email !== 'string' || !emailPattern.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { message: 'Please provide your name.' },
        { status: 400 }
      );
    }

    const validRoles = ['student', 'educator', 'researcher', 'institution', 'other'];
    if (!role || !validRoles.includes(role)) {
      return NextResponse.json(
        { message: 'Please select a valid role.' },
        { status: 400 }
      );
    }

    if (!supabase) {
      console.warn('[waitlist] Supabase not configured');
      return NextResponse.json(
        { message: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    // Check for duplicate email
    const { data: existing, error: checkError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email.trim().toLowerCase())
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('[waitlist] Error checking duplicate:', checkError);
      return NextResponse.json(
        { message: 'Unable to process request. Please try again.' },
        { status: 500 }
      );
    }

    if (existing) {
      return NextResponse.json(
        { message: 'This email is already on the waitlist.' },
        { status: 409 }
      );
    }

    // Get current position in queue
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    const position = (count || 0) + 1;

    // Insert new entry
    const submission = {
      email: email.trim().toLowerCase(),
      name: name.trim(),
      role: role.trim(),
      position,
      joined_at: new Date().toISOString(),
      user_agent: request.headers.get('user-agent') || null,
      referrer: request.headers.get('referer') || null,
    };

    const { error: insertError } = await supabase
      .from('waitlist')
      .insert(submission);

    if (insertError) {
      console.error('[waitlist] Insert error:', insertError);
      return NextResponse.json(
        { message: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Successfully joined the waitlist!',
        position,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[waitlist] Unexpected error:', error);
    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { message: 'Submit a POST request to join the waitlist.' },
    { status: 405 }
  );
}
