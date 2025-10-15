import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null;

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const { name, email, organization, interest, message } = payload ?? {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ message: 'Please provide your full name.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !emailPattern.test(email)) {
      return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!organization || typeof organization !== 'string' || organization.trim().length < 2) {
      return NextResponse.json({ message: 'Please tell us about your organization.' }, { status: 400 });
    }

    if (!interest || typeof interest !== 'string') {
      return NextResponse.json({ message: 'Please select your primary interest.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 20) {
      return NextResponse.json({ message: 'Please share at least 20 characters about your objectives.' }, { status: 400 });
    }

    const submission = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      organization: organization.trim(),
      interest: interest.trim(),
      message: message.trim(),
      submitted_at: new Date().toISOString(),
      user_agent: request.headers.get('user-agent') ?? null,
      referrer: request.headers.get('referer') ?? null,
    };

    if (supabase) {
      const { error } = await supabase.from('contact_requests').insert(submission);
      if (error) {
        console.error('[contact] Failed to persist submission', error);
        return NextResponse.json({ message: 'We could not record your request. Please try again later.' }, { status: 502 });
      }
    } else {
      console.warn('[contact] Supabase environment variables missing. Submission logged only.', submission);
    }

    return NextResponse.json({ message: 'Submission received.' }, { status: 200 });
  } catch (error) {
    console.error('[contact] Unexpected error', error);
    return NextResponse.json({ message: 'Something went wrong. Please try again later.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Submit a POST request to contact Orbythic.' }, { status: 405 });
}
