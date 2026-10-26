import { TheBouncerGate } from '@/components/TheBouncerGate';

export default function LandingPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          UNYIELDING <span className="text-cyan-400">EDGE SECURITY</span> & ROUTING
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          Eliminate runtime mutation drift and stop malicious traffic at the perimeter.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <TheBouncerGate>
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 rounded-md font-bold transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">
              Get Started →
            </button>
          </TheBouncerGate>

          <a
            href="#architecture"
            className="border border-slate-700 hover:border-slate-500 px-8 py-3 rounded-md font-semibold text-slate-300 transition-all"
          >
            Explore Architecture
          </a>
        </div>
      </section>
    </main>
  );
}
