import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define a list of common patterns used by vulnerability scanners.
const BLOCKED_PATTERNS = [
  '.php',
  '/wp-admin',
  '/wp-login',
  '/wp-includes',
  '/xmlrpc.php',
  '/.env',
  '/.git',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request path matches any of the blocked patterns.
  const isBlocked = BLOCKED_PATTERNS.some((pattern) => pathname.includes(pattern));

  if (isBlocked) {
    // If it's a blocked path, immediately return a 404 Not Found response.
    // This is more efficient than letting it go through the normal Next.js rendering.
    return new NextResponse(null, { status: 404 });
  }

  // For all other legitimate requests, let them proceed as normal.
  return NextResponse.next();
}

// Configure the middleware to run on all requests.
export const config = {
  matcher: '/:path*',
};
