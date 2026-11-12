import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sovereignarena.com'),
  title: 'Sovereign Arena | The Forge & The Bootcamp',
  description: 'Local-first, zero-trust software. Explore the Logic Engine gauntlet and access The Forge and The Bootcamp with a verified subscription.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-emerald-400 focus:p-3 focus:text-black">Skip to content</a>
        <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
          <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
            <a href="/" className="text-lg font-semibold tracking-tight"><span className="mr-2 text-emerald-400" aria-hidden="true">◈</span>SOVEREIGN <span className="text-zinc-400">ARENA</span></a>
            <div className="flex gap-5 font-mono text-xs text-zinc-300"><a href="/#gauntlet" className="hover:text-emerald-300">Gauntlet</a><a href="/#architecture" className="hover:text-emerald-300">Architecture</a><a href="/#software" className="hover:text-emerald-300">Software ↗</a></div>
          </nav>
        </header>
        <main id="content" className="mx-auto max-w-7xl px-5 py-8 sm:px-8">{children}</main>
        <footer className="border-t border-zinc-800 px-5 py-8 font-mono text-xs text-zinc-400"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4"><p>© 2026 Sovereign Arena / sovereignarena.com</p><p>SOFTWARE ONLY. LOCAL FIRST. ZERO TRUST.</p></div></footer>
      </body>
    </html>
  );
}
