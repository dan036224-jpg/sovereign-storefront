// Run against a local production server: node scripts/check-entitlement-routes.mjs
import assert from 'node:assert/strict';
const origin = 'http://localhost:3000';
let checks = 0;
async function check(path, options, status) {
  const response = await fetch(`${origin}${path}`, { redirect: 'manual', ...options });
  assert.equal(response.status, status, `${path}: unexpected status`);
  checks++;
  return response;
}
const post = (body, cookie) => ({
  method: 'POST',
  headers: { Origin: origin, 'Content-Type': 'application/json', ...(cookie ? { Cookie: cookie } : {}) },
  body: JSON.stringify(body),
});
for (const path of ['/forge', '/bull-pit', '/bootcamp']) {
  const missing = await check(path, {}, 307);
  assert.match(missing.headers.get('location'), /error=unauthorized_access/);
  const forged = await check(path, { headers: { Cookie: '__session_sovereign=forged' } }, 307);
  assert.match(forged.headers.get('location'), /error=unauthorized_access/);
}
await check('/api/verify-entitlement', post({ target: 'forge' }), 401);
await check('/api/verify-entitlement', post({ target: 'bootcamp', entitlementKey: 'forged' }), 503);
await check('/api/verify-entitlement', post({ target: 'forge' }, '__session_sovereign=forged'), 503);
await check('/api/verify-entitlement', post({ target: 'https://example.com' }), 400);
await check('/api/verify-entitlement', post({ target: 'forge', entitlementKey: 123 }), 400);
await check('/api/verify-entitlement', { ...post({ target: 'forge' }), headers: { Origin: 'https://example.com', 'Content-Type': 'application/json' } }, 403);
await check('/api/verify-entitlement', { ...post({}), body: '{' }, 400);
await check('/api/arena-execute', post({}), 401);
await check('/api/arena-execute', post({}, '__session_sovereign=forged'), 503);
await check('/forge-public', {}, 404);
console.log(`${checks} fail-closed route checks passed.`);
