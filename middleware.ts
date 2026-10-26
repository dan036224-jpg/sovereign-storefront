import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const PAYPAL_CHECKOUT_URL = 
    process.env.NEXT_PUBLIC_PAYPAL_CHECKOUT_URL || 
    'https://www.paypal.com/ncp/payment/YOUR_PAYPAL_BUTTON_ID';

  const protectedRoutes = ['/arena', '/dashboard', '/telemetry/live'];
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  const subscriberToken = request.cookies.get('sovereign_sub_token')?.value;

  if (isProtected && !subscriberToken) {
    return NextResponse.redirect(new URL(PAYPAL_CHECKOUT_URL));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/arena/:path*',
    '/dashboard/:path*',
    '/telemetry/live/:path*',
  ],
};
