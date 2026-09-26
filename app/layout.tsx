import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sovereign Arena",
  description: "Modern e-commerce storefront for Sovereign Arena",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Logo/Brand */}
              <div className="flex items-center gap-8">
                <h1 className="text-2xl font-bold tracking-tighter">
                  ⚔️ Sovereign Arena
                </h1>
                
                {/* Navigation Links */}
                <ul className="hidden gap-6 md:flex">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium transition-colors hover:text-blue-400"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium transition-colors hover:text-blue-400"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium transition-colors hover:text-blue-400"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Cart Badge */}
              <div className="flex items-center gap-4">
                <button className="relative rounded-lg p-2 transition-colors hover:bg-zinc-800">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0l2 9m-12 0h14M9 6h6"
                    />
                  </svg>
                  <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">
                    0
                  </span>
                </button>

                {/* Menu Button - Mobile */}
                <button className="rounded-lg p-2 transition-colors hover:bg-zinc-800 md:hidden">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="border-t border-zinc-800 bg-zinc-950 py-8 text-center text-sm text-zinc-400">
          <p>&copy; 2026 Sovereign Arena. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
