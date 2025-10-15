import { NextRequest } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export function rateLimit(config: RateLimitConfig) {
  const { maxRequests, windowMs } = config;

  return function checkRateLimit(request: NextRequest): {
    success: boolean;
    remaining: number;
    resetTime: number;
  } {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown';

    const now = Date.now();
    const key = `${ip}`;

    if (!store[key] || now > store[key].resetTime) {
      store[key] = {
        count: 1,
        resetTime: now + windowMs,
      };
      return {
        success: true,
        remaining: maxRequests - 1,
        resetTime: store[key].resetTime,
      };
    }

    if (store[key].count >= maxRequests) {
      return {
        success: false,
        remaining: 0,
        resetTime: store[key].resetTime,
      };
    }

    store[key].count++;
    return {
      success: true,
      remaining: maxRequests - store[key].count,
      resetTime: store[key].resetTime,
    };
  };
}

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach(key => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}, 60000); // Clean up every minute
