"use client";

import { useState } from "react";
import Link from "next/link";
import { Rocket, Zap, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export default function V0Landing() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "v0";
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    // Simulate brief network delay for UX feedback
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Header / Nav */}
      <header className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 hover:opacity-90 transition-opacity">
          <span>{appName.slice(0, 1)}</span>
          <span className="text-indigo-400">{appName.slice(1) || ""}</span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/arena"
            className="text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Arena
          </Link>
          <Link
            href="/store"
            className="text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Store
          </Link>
          <a
            href="#contact"
            className="text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white px-3 sm:px-4 py-2 rounded-full transition-colors flex items-center gap-1.5"
          >
            <span>Get in Touch</span>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-16 sm:pt-20 pb-24 sm:pb-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-8">
          <Rocket className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Launching Soon</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight mb-6 text-balance">
          Build something incredible for your audience.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl mb-10 text-pretty">
          A high-performance platform designed to scale with your vision. Minimal setup, maximum impact.
        </p>

        {/* Signup Form */}
        <div id="contact" className="w-full max-w-md scroll-mt-24">
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-5 py-4 rounded-xl text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" aria-hidden="true" />
              <span>Thanks for signing up! We&apos;ll notify you when {appName} launches.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full justify-center"
            >
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <input
                id="email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 flex-1 text-sm sm:text-base"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 text-white font-medium px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm sm:text-base shrink-0"
              >
                <span>{isLoading ? "Submitting..." : "Notify Me"}</span>
                {!isLoading && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900/50 border border-slate-900 p-8 rounded-2xl hover:border-slate-800 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
            <Zap className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Optimized for speed and performance right out of the box on global edge networks.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-900 p-8 rounded-2xl hover:border-slate-800 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Secure &amp; Reliable</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Built with modern web standards ensuring top-tier reliability and data protection.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-900 p-8 rounded-2xl hover:border-slate-800 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Scale Effortlessly</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Grows smoothly as your project expands, handling traffic spikes effortlessly.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs sm:text-sm">
        <div>
          &copy; 2026 {appName}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/arena" className="hover:text-slate-300 transition-colors">
            Arena Platform
          </Link>
          <Link href="/store" className="hover:text-slate-300 transition-colors">
            Storefront
          </Link>
          <a href="#contact" className="hover:text-slate-300 transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
