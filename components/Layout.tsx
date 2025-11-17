// components/Layout.tsx (with image logo)
import type { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
            {/* Logo with Image */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group transition-all duration-200 hover:scale-105"
            >
              {/* Replace with your actual logo path */}
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/logos/abraham-london-logo.png" // Update this path
                  alt="Abraham of London"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-wide text-cream group-hover:text-softGold transition-colors">
                  Abraham of London
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-softGold/80 font-medium">
                  Ventures
                </span>
              </div>
            </Link>

            <nav className="flex items-center gap-6 text-sm text-gray-200">
              <Link href="/ventures" className="hover:text-softGold transition-colors duration-200 font-medium">
                Ventures
              </Link>
              <Link href="/innovatehub" className="hover:text-softGold transition-colors duration-200 font-medium">
                InnovateHub
              </Link>
              <Link href="/contact" className="hover:text-softGold transition-colors duration-200 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Rest remains the same */}
        <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
          {children}
        </main>

        <footer className="border-t border-white/10 bg-black/70 py-6 text-center text-sm text-gray-300">
          <div className="max-w-6xl mx-auto px-4">
            <p>© {year} Abraham of London. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-400">Built with discipline, designed for legacy.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;