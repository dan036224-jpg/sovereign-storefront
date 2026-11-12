import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, verifyEntitlement } from '../../../lib/entitlements';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const headers = { 'Cache-Control': 'private, no-store' };
  if (request.headers.get('origin') !== request.nextUrl.origin) {
    return NextResponse.json({ message: 'Same-origin execution required.' }, { status: 403, headers });
  }
  try {
    const result = await verifyEntitlement({
      sessionCookie: request.cookies.get(SESSION_COOKIE)?.value,
      tool: 'bootcamp',
    });
    if (result.status !== 'verified') {
      return NextResponse.json({ message: 'Verified Bootcamp entitlement required.' }, {
        status: result.status === 'unavailable' ? 503 : 401,
        headers,
      });
    }
    // Mount the real Logic Engine here only after validating an execution schema.
    return NextResponse.json({ message: 'Live arena execution is not connected.' }, { status: 501, headers });
  } catch {
    return NextResponse.json({ message: 'Entitlement verification unavailable.' }, { status: 503, headers });
  }
}
