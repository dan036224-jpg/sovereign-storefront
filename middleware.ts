import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Match whole path segments, not lookalikes such as /forge-public.
  // Retain the original protected routes alongside the software terminals.
  const protectedRoutes = [
    '/bull-pit', '/forge', '/bootcamp', '/api/arena-execute',
    '/arena', '/dashboard', '/telemetry/live',
  ];
  const isProtected = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  if (!isProtected) return NextResponse.next();

  const sessionCookie = request.cookies.get('__session_sovereign');
  if (!sessionCookie?.value) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json(
        { message: 'A verified session is required.' },
        { status: 401, headers: { 'Cache-Control': 'private, no-store' } },
      );
    }
    const loginUrl = new URL('/', request.url);
    loginUrl.searchParams.set('error', 'unauthorized_access');
    loginUrl.searchParams.set('launch', pathname === '/forge' || pathname.startsWith('/forge/') ? 'forge' : 'bootcamp');
    const denied = NextResponse.redirect(loginUrl);
    denied.headers.set('Cache-Control', 'private, no-store');
    return denied;
  }

  // Cookie presence is only a preflight. Each protected Server Component/API
  // must cryptographically verify identity AND tool entitlement in Node runtime.
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'private, no-store');
  return response;
}

export const config = {
  matcher: [
    '/bull-pit/:path*', '/forge/:path*', '/bootcamp/:path*',
    '/api/arena-execute/:path*', '/arena/:path*', '/dashboard/:path*',
    '/telemetry/live/:path*',
  ],
};
