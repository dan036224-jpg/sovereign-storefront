import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SESSION_COOKIE, Tool, verifyEntitlement } from './entitlements';

/** Node-only server gate: re-check at every data/action boundary, not just middleware. */
export async function requireEntitlement(tool: Tool) {
  try {
    const result = await verifyEntitlement({
      sessionCookie: cookies().get(SESSION_COOKIE)?.value,
      tool,
    });
    if (result.status === 'verified') return result;
  } catch {
    // Provider failure also fails closed. Do not catch Next's redirect below.
  }
  redirect(`/?launch=${tool}&error=unauthorized_access`);
}
