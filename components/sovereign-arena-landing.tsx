'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Activity, 
  Cpu, 
  Database, 
  CheckCircle, 
  ArrowRight, 
  Lock 
} from 'lucide-react';

export default function SovereignArenaLanding() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('quarterly');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* BACKGROUND ACCENTS */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black -z-10" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-500/10 blur-[120px] pointer-events-none -z-10" />

      {/* HEADER / NAVIGATION */}
      <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-black shadow-lg shadow-cyan-500/20">
              SA
            </div>
            <div>
              <span className="font-extrabold tracking-widest text-lg text-white block leading-none">
                SOVEREIGN ARENA
              </span>
              <span className="text-[10px] tracking-widest text-cyan-400 font-mono">
                CYBER ORCHESTRATION SUITE
              </span>
            </div>
          </div>
          <a
            href="#pricing"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:brightness-110 transition shadow-lg shadow-cyan-500/20 text-sm"
          >
            Deploy Now
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Zero-Trust Execution Pipeline
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
            UNYIELDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">EDGE SECURITY</span> & ROUTING
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Eliminate runtime mutation drift and stop malicious traffic at the perimeter. Sovereign Arena combines real-time threat isolation, sub-millisecond event routing, and live continuous audit telemetry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-lg hover:brightness-110 transition shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#modules"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold text-lg hover:bg-slate-800/80 transition flex items-center justify-center gap-2"
            >
              Explore Architecture
            </a>
          </div>
        </motion.div>
      </section>

      {/* MASTER SENTINEL TELEMETRY HERO BANNER */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                <span className="font-mono text-sm uppercase tracking-widest text-red-400 font-bold">
                  LIVE TELEMETRY COMMAND CENTER
                </span>
              </div>
              <h3 className="text-3xl font-extrabold text-white">SENTINEL RUNTIME AUDITOR</h3>
              <p className="text-slate-400 max-w-xl text-sm">
                Continuously evaluates active system posture, monitors process execution bounds, and enforces instant anomaly termination across all connected modules.
              </p>
            </div>

            {/* LIVE DIAL DISPLAY */}
            <div className="flex items-center gap-6 p-6 rounded-xl bg-slate-950 border border-slate-800/80 shadow-inner">
              <div className="text-center">
                <div className="text-3xl font-black font-mono text-cyan-400">100%</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">DETERMINISTIC</div>
              </div>
              <div className="h-10 w-px bg-slate-800" />
              <div className="text-center">
                <div className="text-3xl font-black font-mono text-emerald-400">0.12ms</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">MEAN LATENCY</div>
              </div>
              <div className="h-10 w-px bg-slate-800" />
              <div className="text-center">
                <div className="text-3xl font-black font-mono text-red-400">ACTIVE</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">PROCESS AUDIT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE MODULES MATRIX */}
      <section id="modules" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">THE CORE SIX STACK</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Six non-overlapping modules engineered to work as an integrated, hardened zero-trust deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'The Bouncer',
              role: 'Edge Boundary Control',
              desc: 'Hard-line perimeter filtering enforcing rate-limiting and authenticating incoming tokens before hitting core subnets.',
              spec: '100K RPM Edge Capacity',
              icon: ShieldCheck,
              accent: 'border-cyan-500/40 text-cyan-400'
            },
            {
              name: 'The Magnetic Bouncer',
              role: 'Non-Linear Flux Trap',
              desc: 'Intercepts anomalous threat vectors and traps them in isolated fields to preserve pipeline flow without dropouts.',
              spec: '100% Non-Linear Flux Isolation',
              icon: Zap,
              accent: 'border-purple-500/40 text-purple-400'
            },
            {
              name: 'Magneto',
              role: 'Zero-Mutation Router',
              desc: 'High-speed event distribution engine pushing raw unmutated vectors at sub-millisecond speeds.',
              spec: '< 0.12ms Unmutated Transit',
              icon: Cpu,
              accent: 'border-blue-500/40 text-blue-400'
            },
            {
              name: 'Logic Engine',
              role: 'Deterministic Execution',
              desc: 'Executes complex business rules and transactional evaluations with strict, zero-drift guarantees.',
              spec: '100% Zero State Drift',
              icon: Activity,
              accent: 'border-emerald-500/40 text-emerald-400'
            },
            {
              name: 'The Farmer',
              role: 'Asynchronous State Ingestion',
              desc: 'High-density batch processing engine continuously syncing and persisting worker telemetry across DB targets.',
              spec: '10K Rec/sec Batch Capacity',
              icon: Database,
              accent: 'border-amber-500/40 text-amber-400'
            },
            {
              name: 'Sentinel',
              role: 'Continuous Runtime Auditor',
              desc: 'Omnipresent execution observer holding write-once persistent audit logs and terminating rogue threads.',
              spec: 'Live Master Command Telemetry',
              icon: Lock,
              accent: 'border-red-500/40 text-red-400'
            }
          ].map((mod, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800/80 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-slate-950 border ${mod.accent}`}>
                    <mod.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    DIGITAL SPEC GAUGE
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-1">{mod.name}</h4>
                <p className="text-xs font-mono text-cyan-400 mb-4">{mod.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{mod.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-500">RATED SPEC:</span>
                <span className="text-slate-200 font-bold">{mod.spec}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING & DEPLOYMENT TIERS */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">DEPLOYMENT TIERS</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Fixed operational pricing. Lock in quarterly rates to secure priority capacity and pricing guarantees.
          </p>

          {/* TOGGLE */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              type="button"
              aria-pressed={billingCycle === 'monthly'}
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition ${
                billingCycle === 'monthly'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Pay Monthly
            </button>
            <button
              type="button"
              aria-pressed={billingCycle === 'quarterly'}
              onClick={() => setBillingCycle('quarterly')}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2 ${
                billingCycle === 'quarterly'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Quarterly Commit
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950 text-cyan-400 font-mono">
                SAVE UP TO $298
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SINGLE NODE */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 transition">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold">
                STANDALONE MISSION-CRITICAL
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">Single Node Core</h3>
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-black">
                  {billingCycle === 'monthly' ? '$299' : '$799'}
                </span>
                <span className="text-slate-400 text-sm font-mono ml-2">
                  {billingCycle === 'monthly' ? '/ month' : '/ quarter'}
                </span>
                {billingCycle === 'quarterly' && (
                  <p className="text-xs text-cyan-400 font-mono mt-1">Saves $98 per quarter</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                {[
                  'Full Core Stack Runtime (Sentinel, Bouncers, Magneto, Logic, Farmer)',
                  'Standard Event Payload Logging',
                  '100K RPM Edge Capacity',
                  'Write-Once Append-Only Audit Trail',
                  'Standard Support Response Time'
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <button className="w-full py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:brightness-110 transition shadow-lg shadow-cyan-500/20">
                Pay with Credit Card
              </button>
              <button className="w-full py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2 text-sm">
                <span>Pay with PayPal</span>
              </button>
            </div>
          </div>

          {/* HA CLUSTER */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/40 flex flex-col justify-between relative shadow-2xl">
            <div className="absolute -top-3 right-8 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider">
              HIGH AVAILABILITY
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold">
                MULTI-REGION HYPER-SCALE
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">Enterprise HA Cluster</h3>
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-black">
                  {billingCycle === 'monthly' ? '$899' : '$2,399'}
                </span>
                <span className="text-slate-400 text-sm font-mono ml-2">
                  {billingCycle === 'monthly' ? '/ month' : '/ quarter'}
                </span>
                {billingCycle === 'quarterly' && (
                  <p className="text-xs text-cyan-400 font-mono mt-1">Saves $298 per quarter</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                {[
                  'Multi-Region Fault Tolerance & Dynamic Failover',
                  'Dedicated Magnetic Flux Isolation Buffer Pools',
                  'Priority Sentinel Live Telemetry Stream Integration',
                  'Custom Logic Engine Hookups & Rule Overrides',
                  '24/7 Dedicated Architecture Support'
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:brightness-110 transition shadow-lg shadow-cyan-500/25">
                Deploy Enterprise Cluster
              </button>
              <button className="w-full py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2 text-sm">
                <span>Pay with PayPal</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-12 text-center text-slate-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>SOVEREIGN ARENA © 2026. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">SYSTEM STATUS</a>
            <a href="#" className="hover:text-slate-300">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-slate-300">SECURITY POSTURE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
