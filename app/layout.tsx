import type { Metadata } from "next";
import "./globals.css";

const appName = process.env.NEXT_PUBLIC_APP_NAME || "v0";

export const metadata: Metadata = {
  title: `${appName} // Launching Soon`,
  description:
    "A high-performance platform designed to scale with your vision. Minimal setup, maximum impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className="bg-slate-950 text-slate-100">
        <main>{children}</main>
      </body>
    </html>
  );
}
