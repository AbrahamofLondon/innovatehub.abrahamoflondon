// components/Layout.tsx

import type { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({
  children,
  title = "Abraham of London",
  description = "World-class strategies, ventures, and tools from Abraham of London.",
}: LayoutProps): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-black via-deepCharcoal to-black text-cream">
        {/* Top bar */}
        <header className="border-b border-white/10 bg-black/60 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-serif text-lg font-semibold tracking-wide">
                Abraham of London
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.24em] text-softGold/80">
                Ventures
              </span>
            </Link>

            <nav className="flex items-center gap-5 text-sm text-gray-200">
              <Link href="/ventures" className="hover:text-softGold">
                Ventures
              </Link>
              <Link href="/innovatehub" className="hover:text-softGold">
                InnovateHub
              </Link>
              <Link href="/contact" className="hover:text-softGold">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Page body */}
        <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/70 py-4 text-center text-xs text-gray-300">
          © {year} Abraham of London. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Layout;