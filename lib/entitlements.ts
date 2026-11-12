/** Server-side integration boundary. Never import Firebase Admin into Edge middleware. */
export type Tool = 'forge' | 'bootcamp';
export const SESSION_COOKIE = '__session_sovereign';
export const destinations: Record<Tool, string> = { forge: '/forge', bootcamp: '/bull-pit' };

type Verification =
  | { status: 'verified'; subject: string }
  | { status: 'denied' | 'unavailable' };

export async function verifyEntitlement(input: {
  sessionCookie?: string;
  entitlementKey?: string;
  tool: Tool;
}): Promise<Verification> {
  if (!input.sessionCookie && !input.entitlementKey) return { status: 'denied' };

  // THE POOL / FIREBASE ADMIN HOOK (Node runtime only):
  // Verify the HttpOnly session cookie with revocation checking. If a key is supplied,
  // validate it server-side, bind it to the authenticated subject, and only then issue
  // a Secure, HttpOnly, SameSite cookie. Never treat cookie/key presence as identity.
  // STRIPE HOOK: resolve the verified subject's active entitlement for input.tool
  // from trusted server-side subscription data. Check expiry, cancellation and scope.
  // Return { status: 'verified', subject } ONLY after both checks succeed.
  // The destination must never be accepted from a key, cookie, or client-provided URL.
  return { status: 'unavailable' };
}
