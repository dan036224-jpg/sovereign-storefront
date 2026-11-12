import { NextRequest, NextResponse } from 'next/server';
import { destinations, SESSION_COOKIE, verifyEntitlement } from '../../../lib/entitlements';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function json(body: object, status: number) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'private, no-store' } });
}

export async function POST(request: NextRequest) {
  // Reject cross-origin form submissions; middleware supplies this same-origin header too.
  if (request.headers.get('origin') !== request.nextUrl.origin) {
    return json({ message: 'Same-origin verification required.' }, 403);
  }
  if (!request.headers.get('content-type')?.startsWith('application/json')) {
    return json({ message: 'Expected a JSON verification request.' }, 415);
  }

  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 2048) return json({ message: 'Verification request too large.' }, 413);
    body = JSON.parse(text);
  } catch {
    return json({ message: 'Invalid verification request.' }, 400);
  }
  if (!body || typeof body !== 'object' || !('target' in body) || (body.target !== 'forge' && body.target !== 'bootcamp')) {
    return json({ message: 'Unknown software entitlement.' }, 400);
  }
  const key = 'entitlementKey' in body ? body.entitlementKey : undefined;
  if (key !== undefined && (typeof key !== 'string' || key.length > 512)) {
    return json({ message: 'Invalid entitlement key.' }, 400);
  }

  try {
    const result = await verifyEntitlement({
      sessionCookie: request.cookies.get(SESSION_COOKIE)?.value,
      entitlementKey: typeof key === 'string' ? key.trim() : undefined,
      tool: body.target,
    });
    if (result.status === 'unavailable') {
      return json({ message: 'Verification is not connected yet. Firebase (The Pool) and Stripe entitlement hooks are required; access remains locked.' }, 503);
    }
    if (result.status !== 'verified') {
      return json({ message: 'A verified session or entitlement key is required. No access was granted.' }, 401);
    }
    return json({ destination: destinations[body.target] }, 200);
  } catch {
    // Provider failures must never fail open or leak credentials/provider responses.
    return json({ message: 'Entitlement verification is temporarily unavailable.' }, 503);
  }
}
