# Sovereign Arena software terminals

## Routes

| Route | Runtime | Behavior |
| --- | --- | --- |
| `/` | Client UI on Next.js | Public simulated gauntlet, module inspection, software tiers and access dialog |
| `POST /api/verify-entitlement` | Node.js | Reads `__session_sovereign` or an optional key, validates tool target, verifies identity + entitlement server-side, returns only `/forge` or `/bull-pit` on success |
| `/forge` | Node.js Server Component + Edge preflight | Forge entitlement required; protected workspace integration shell |
| `/bull-pit` | Node.js Server Component + Edge preflight | Bootcamp entitlement required; protected training integration shell |
| `/bootcamp` | Node.js Server Component + Edge preflight | Bootcamp entitlement required, then redirects to `/bull-pit` |
| `POST /api/arena-execute` | Node.js + Edge preflight | Bootcamp entitlement required; execution deliberately unavailable until a validated Logic Engine adapter is installed |

The existing `/arena`, `/dashboard`, and `/telemetry/live` middleware matchers are retained. They do not currently have page implementations. Any future implementation must also call the server-side verifier before reading data or performing actions.

## Entitlement integration (deliberately locked)

Middleware checks **only cookie presence**. Missing page sessions redirect to `/?error=unauthorized_access&launch=…`; APIs return JSON 401. The Server Components and API handlers independently invoke `lib/entitlements.ts`, which denies missing credentials and returns unavailable for supplied credentials until provider verification is implemented. A forged cookie or arbitrary key never unlocks software. Verification/provider errors fail closed; no result is cached publicly.

Implement the Firebase Admin (The Pool) and Stripe hooks in `verifyEntitlement` in the **Node runtime**, not Edge middleware:

1. Verify the Firebase session cryptographically with revocation checking, or securely redeem a key and bind it to a verified subject. Never trust an unverified subject or tool claim.
2. Resolve the subject's active Stripe-backed entitlement for the specific tool, including expiry/cancellation. Use trusted server-side state, not client claims.
3. Only return `verified` after both checks succeed. Key redemption must issue the verified `__session_sovereign` cookie with `HttpOnly`, `Secure`, `SameSite` and a suitable expiry/path before returning success. The redirected protected page re-verifies that session.
4. Add provider-specific tests, abuse/rate limits and key redemption lifecycle handling when those services are connected. No credential values should enter client bundles or logs.

No Firebase/Stripe dependencies, secrets, environment bindings, payment prices or Vercel deployment settings are introduced or changed. The software terminals are integration shells, not finished execution tools. The 4,200-vector hero is explicitly synthetic, local browser state; it does not claim to execute 4,200 real backend scenarios. High-risk scenario names only select abstract drift parameters.

## Checks

`pnpm run lint`, `pnpm run build`, then `pnpm start` in one terminal and `node scripts/check-entitlement-routes.mjs` in another. Route checks cover missing/forged sessions, arbitrary keys, same-origin enforcement, invalid input, tool target allowlisting and guarded execution.
