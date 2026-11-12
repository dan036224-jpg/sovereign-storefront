import { requireEntitlement } from '../../lib/require-entitlement';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function BullPitPage() {
  await requireEntitlement('bootcamp');
  return (
    <section className="rounded-xl border border-indigo-800 bg-slate-950 p-8">
      <p className="font-mono text-xs text-indigo-300">OPERATOR TERMINAL / THE BOOTCAMP</p>
      <h1 className="mt-5 text-4xl font-semibold">The Bull Pit</h1>
      <p className="mt-5 text-zinc-300">Protected Bootcamp training floor. Live Logic Engine execution can be mounted here after server-side entitlement verification is connected.</p>
    </section>
  );
}
