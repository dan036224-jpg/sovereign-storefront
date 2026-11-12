import { requireEntitlement } from '../../lib/require-entitlement';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ForgePage() {
  await requireEntitlement('forge');
  return (
    <section className="rounded-xl border border-emerald-800 bg-slate-950 p-8">
      <p className="font-mono text-xs text-emerald-300">BUILDER TERMINAL / FORGE</p>
      <h1 className="mt-5 text-4xl font-semibold">The Forge</h1>
      <p className="mt-5 text-zinc-300">Protected software workspace. Scenario and state tooling can be mounted here after server-side entitlement verification is connected.</p>
    </section>
  );
}
