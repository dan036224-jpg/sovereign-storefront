'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

type Terminal = 'forge' | 'bootcamp';
const scenarios = [
  { name: 'Grayling 100 (Drone Warfare)', code: 'GRY-100', baseline: 12 },
  { name: 'Nuclear Infrastructure', code: 'NUC-042', baseline: 18 },
  { name: 'Deep Water Rescue', code: 'DWR-008', baseline: 8 },
  { name: 'Weather Weaponization', code: 'WX-091', baseline: 15 },
];
const modules = [
  ['01', 'Logic Engine', 'Test the boundary. Not your luck.', '4,200-vector testing gauntlet', 'Executes scenario vectors on the Bull Pit arena floor. The sandbox above models its telemetry; no operational systems are connected.'],
  ['02', 'Sovereign Sentinel', 'Trust nothing. Enforce everything.', 'Zero-trust runtime enforcer', 'Enforces runtime boundaries on the Bull Pit floor, isolating drift before it propagates across local subsystems.'],
  ['03', 'The Bouncer & Magnetic Bouncer', 'Two layers. One perimeter.', 'Ingress filtering & vector isolation', 'The Bouncer filters inbound requests; Magnetic Bouncer isolates vectors at the perimeter before admission to the arena.'],
  ['04', 'Magneto', 'Route with intent.', 'Autonomous routing & state orchestration', 'Coordinates local state transitions and routes work between decoupled modules without sharing implicit trust.'],
  ['05', 'The Farmer & The Collector', 'Harvest signals. Preserve truth.', 'Telemetry harvesting & deterministic archiving', 'The Farmer harvests telemetry; The Collector archives deterministic state for reproducible inspection and replay.'],
  ['06', 'Nexus & Storyteller', 'A shared bus. Explicit boundaries.', 'Inter-module bus & 1–10 divergence handler', 'Nexus carries module messages. Storyteller controls divergence from 1 to 10 while Sentinel retains enforcement authority.'],
];

export default function LandingPage() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [divergence, setDivergence] = useState(3);
  const [running, setRunning] = useState(true);
  const [tick, setTick] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [terminal, setTerminal] = useState<Terminal>('forge');
  const [entitlementKey, setEntitlementKey] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  const pending = useRef<AbortController | null>(null);
  const scenario = scenarios[scenarioIndex];
  const threshold = 24 + divergence * 3;
  const drift = scenario.baseline + divergence * 5 + (tick % 5) - 2;
  const warning = drift >= threshold;

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setTick((value) => value + 1), 1100);
    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    const line = `${String(tick).padStart(5, '0')}  ${scenario.code}  ST:${divergence}  drift:${drift}% / limit:${threshold}%  ${warning ? 'SENTINEL → ISOLATE VECTOR' : 'SENTINEL → BOUNDARY HELD'}`;
    setLogs((previous) => [...previous.slice(-6), line]);
  }, [tick, scenario.code, divergence, drift, threshold, warning]);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('launch');
    if (requested === 'forge' || requested === 'bootcamp') {
      setTerminal(requested);
      dialog.current?.showModal();
    }
    return () => pending.current?.abort();
  }, []);

  function openTerminal(target: Terminal) {
    setTerminal(target);
    setMessage('');
    dialog.current?.showModal();
  }

  function closeTerminal() {
    pending.current?.abort();
    setBusy(false);
    setEntitlementKey('');
    setMessage('');
  }

  async function verifyEntitlement(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setMessage('Checking secure session with The Pool…');
    const controller = new AbortController();
    pending.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch('/api/verify-entitlement', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target: terminal, entitlementKey }),
        signal: controller.signal,
      });
      const result = await response.json();
      const expected = terminal === 'forge' ? '/forge' : '/bull-pit';
      if (response.ok && result.destination === expected) {
        window.location.assign(expected);
      } else {
        setMessage(result.message || 'Access denied. A verified software subscription is required.');
      }
    } catch {
      if (dialog.current?.open) setMessage('Verification could not complete. Please try again.');
    } finally {
      window.clearTimeout(timeout);
      setEntitlementKey('');
      setBusy(false);
    }
  }

  return (
    <div className="space-y-24 pb-12">
      <section id="gauntlet" className="scroll-mt-28 pt-8 sm:pt-14">
        <div className="mb-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          sovereignarena.com <span className="text-zinc-600">/</span> Independent software systems
        </div>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="mb-5 font-mono text-xs tracking-[0.2em] text-indigo-300">01 / THE INTERACTIVE GAUNTLET</p>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tighter sm:text-7xl">Pressure test<br />the <span className="text-emerald-400">possible.</span></h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-zinc-300">4,200 executable scenario vectors. One arena floor. Explore the Logic Engine on the <span className="text-white">Bull Pit</span>, under Sovereign Sentinel enforcement.</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400">This is a client-side telemetry simulation—not a live operational system. Change the scenario. Push divergence. Watch the boundary hold.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => openTerminal('bootcamp')} className="rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-300">Launch terminal ↗</button>
              <a href="#architecture" className="rounded-lg border border-zinc-700 px-5 py-3 text-zinc-200 hover:border-indigo-400">Inspect architecture ↓</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-zinc-800 pt-5 font-mono">
              {[['4,200', 'scenario vectors'], ['ZERO TRUST', 'runtime model'], ['LOCAL FIRST', 'system design']].map(([value, label]) => <div key={label}><p className="text-sm text-white">{value}</p><p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-400">{label}</p></div>)}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-zinc-700 bg-slate-950 shadow-2xl shadow-emerald-950/20">
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/70 px-5 py-4 font-mono text-xs">
              <span className="text-zinc-300">BULL PIT <span className="text-zinc-500">/ telemetry sandbox</span></span>
              <span className="text-emerald-300">SIMULATED</span>
            </div>
            <div className="space-y-6 p-5 sm:p-6">
              <div>
                <label htmlFor="scenario" className="mb-2 block font-mono text-xs uppercase tracking-wider text-zinc-400">Scenario vector</label>
                <select id="scenario" value={scenarioIndex} onChange={(event) => { setScenarioIndex(Number(event.target.value)); setTick(0); setLogs([]); }} className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-3 text-sm text-white">
                  {scenarios.map((item, index) => <option key={item.code} value={index}>{item.name}</option>)}
                </select>
              </div>
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <label htmlFor="divergence" className="font-mono text-xs uppercase tracking-wider text-zinc-300">Storyteller / divergence</label>
                  <output htmlFor="divergence" className="font-mono text-xl text-indigo-300">{divergence}<span className="text-sm text-zinc-500"> / 10</span></output>
                </div>
                <input id="divergence" type="range" min="1" max="10" step="1" value={divergence} onChange={(event) => setDivergence(Number(event.target.value))} className="w-full accent-emerald-400" />
                <div className="mt-1 flex justify-between font-mono text-[10px] text-zinc-400"><span>1 / DETERMINISTIC</span><span>10 / EXPLORATORY</span></div>
              </div>
              <div className="grid grid-cols-3 gap-2 font-mono">
                {[['DRIFT', `${drift}%`], ['THRESHOLD', `${threshold}%`], ['VECTORS', `${(tick * 37) % 4200} / 4,200`]].map(([label, value]) => <div key={label} className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3"><p className="text-[10px] text-zinc-400">{label}</p><p className="mt-2 text-sm text-white sm:text-base">{value}</p></div>)}
              </div>
              <p role="status" className={`rounded-lg border px-3 py-3 font-mono text-xs ${warning ? 'border-amber-600/60 bg-amber-950/30 text-amber-300' : 'border-emerald-800 bg-emerald-950/30 text-emerald-300'}`}>
                {warning ? '⚠ Boundary exceeded. Sentinel isolating simulated vector.' : '✓ Boundary held. Sentinel monitoring simulated drift.'}
              </p>
              <div>
                <div className="mb-3 flex items-center justify-between font-mono text-xs"><span className="text-zinc-400">NEXUS // EVENT STREAM</span><button onClick={() => setRunning(!running)} className="rounded border border-zinc-700 px-2 py-1 text-zinc-200 hover:border-emerald-400">{running ? 'Pause stream' : 'Resume stream'}</button></div>
                <div role="log" aria-label="Simulated telemetry stream" aria-live="off" tabIndex={0} className="h-40 overflow-auto rounded-lg border border-zinc-800 bg-black/50 p-3 font-mono text-[10px] leading-6 text-emerald-300/90">
                  {logs.map((line, index) => <p key={`${line}-${index}`} className="whitespace-nowrap">{line}</p>)}
                </div>
                <p className="mt-2 font-mono text-[10px] text-zinc-500">Synthetic values · local browser state · no telemetry transmitted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="scroll-mt-28">
        <p className="font-mono text-xs tracking-[0.2em] text-indigo-300">02 / DECOUPLED BY DESIGN</p>
        <div className="mb-8 mt-4 flex flex-wrap items-end justify-between gap-4"><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">One arena. No implicit trust.</h2><p className="max-w-md text-sm leading-relaxed text-zinc-400">Zero-trust, local-first subsystems. Expand a module to inspect its role in the architecture.</p></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map(([number, name, tagline, purpose, detail]) => <details key={number} className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 open:border-indigo-400/70 hover:border-zinc-600">
            <summary className="cursor-pointer list-none"><div className="mb-6 flex justify-between font-mono text-xs text-indigo-300"><span>SYS / {number}</span><span className="group-open:rotate-45" aria-hidden="true">＋</span></div><h3 className="text-lg font-semibold text-zinc-100">{name}</h3><p className="mt-2 text-sm text-zinc-400">{tagline}</p><p className="mt-5 font-mono text-xs leading-relaxed text-emerald-300">{purpose}</p><span className="mt-4 block text-xs text-zinc-400 group-open:hidden">Inspect module ↗</span></summary>
            <p className="mt-5 border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-300">{detail}</p>
          </details>)}
        </div>
      </section>

      <section id="software" className="scroll-mt-28">
        <p className="font-mono text-xs tracking-[0.2em] text-indigo-300">03 / SOFTWARE & SUBSCRIPTIONS</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Choose your entry point.</h2>
        <p className="mt-4 max-w-2xl text-zinc-400">Standalone interactive tools. Digital access only—no physical goods, no shipping. Each terminal requires a verified software entitlement.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {(['forge', 'bootcamp'] as const).map((target) => <article key={target} className={`rounded-xl border p-7 sm:p-9 ${target === 'forge' ? 'border-emerald-800 bg-emerald-950/10' : 'border-indigo-800 bg-indigo-950/20'}`}>
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">{target === 'forge' ? 'Builder access / software subscription' : 'Operator access / software subscription'}</p>
            <h3 className="mt-5 text-3xl font-semibold">The {target === 'forge' ? 'Forge' : 'Bootcamp'}</h3>
            <p className="mt-4 leading-relaxed text-zinc-300">{target === 'forge' ? 'Your standalone workspace for shaping scenario logic, inspecting boundaries, and iterating on deterministic systems.' : 'Your standalone training environment for exploring scenario vectors, reading telemetry, and practicing on the Bull Pit floor.'}</p>
            <ul className="my-7 space-y-3 text-sm text-zinc-300">{(target === 'forge' ? ['Interactive software workspace', 'Scenario & state tooling', 'Forge-scoped entitlement'] : ['Interactive gauntlet training', 'Storyteller divergence exercises', 'Bull Pit-scoped entitlement']).map((feature) => <li key={feature}><span className="mr-3 text-emerald-400" aria-hidden="true">↳</span>{feature}</li>)}</ul>
            <button onClick={() => openTerminal(target)} className="w-full rounded-lg border border-zinc-500 bg-zinc-950 px-4 py-3 font-medium text-white hover:border-emerald-300">Launch {target === 'forge' ? 'Forge' : 'Bootcamp'} terminal ↗</button>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-zinc-400">Existing session or entitlement key required</p>
          </article>)}
        </div>
      </section>

      <dialog ref={dialog} onClose={closeTerminal} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} aria-labelledby="terminal-title" aria-describedby="terminal-description" className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-xl border border-zinc-600 bg-slate-950 p-0 text-white shadow-2xl backdrop:bg-black/80">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4"><p className="font-mono text-xs tracking-widest text-emerald-300">SOVEREIGN / ACCESS CONTROL</p><button type="button" onClick={() => dialog.current?.close()} aria-label="Close terminal" className="rounded px-3 py-2 text-zinc-300 hover:bg-zinc-800">✕</button></div>
          <h2 id="terminal-title" className="mt-6 text-2xl font-semibold">Launch Terminal / Entitlement Key</h2>
          <p id="terminal-description" className="mt-3 text-sm leading-relaxed text-zinc-300">{terminal === 'forge' ? 'The Forge → /forge' : 'The Bootcamp → /bull-pit'}. Check your secure session cookie, or supply an entitlement key for server-side verification.</p>
          <form onSubmit={verifyEntitlement} className="mt-6">
            <label htmlFor="entitlement-key" className="block text-sm text-zinc-300">Entitlement key <span className="text-zinc-500">(optional with session)</span></label>
            <input id="entitlement-key" type="password" autoComplete="off" maxLength={512} value={entitlementKey} onChange={(event) => setEntitlementKey(event.target.value)} className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 font-mono text-sm" placeholder="Enter entitlement key" />
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">Integration pending: Firebase Admin (The Pool) and Stripe must verify identity and tool access. This preview does not issue sessions or accept payments.</p>
            <button disabled={busy} className="mt-5 w-full rounded-lg bg-emerald-400 px-4 py-3 font-semibold text-slate-950 hover:bg-emerald-300 disabled:opacity-50">{busy ? 'Verifying…' : 'Verify & launch'}</button>
            <p role="status" className="mt-4 min-h-12 text-sm text-amber-200">{message}</p>
          </form>
        </div>
      </dialog>
    </div>
  );
}
