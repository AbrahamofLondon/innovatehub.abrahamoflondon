// components/Layout.tsx

import type { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import siteConfig, { getPageTitle, routes } from "@/lib/siteConfig";

interface LayoutProps {
  children: ReactNode;
  /** Page-specific title fragment (e.g. "Ventures", "About") */
  title?: string;
  /** Optional page-specific description override */
  description?: string;
}

const Layout = ({
  children,
  title,
  description,
}: LayoutProps): JSX.Element => {
  const year = new Date().getFullYear();

  // Compose full <title> using siteConfig helper
  const fullTitle = getPageTitle(title);
  const metaDescription = description || siteConfig.description;

  // Resolve InnovateHub URL from ventures config (fallback is microsite URL)
  const innovateHubUrl =
    siteConfig.ventures.find((v) => v.initials === "IH")?.href ||
    "https://innovatehub.abrahamoflondon.org";

  const navLinks: Array<{
    label: string;
    href: string;
    external?: boolean;
  }> = [
    { label: "Ventures", href: routes.ventures },
    { label: "Blog", href: routes.blog },
    { label: "Downloads", href: routes.downloads },
    { label: "Contact", href: routes.contact },
    // InnovateHub is an external microsite
    { label: "InnovateHub", href: innovateHubUrl, external: true },
  ];

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-black via-deepCharcoal to-black text-cream">
        {/* Top bar */}
        <header className="border-b border-white/10 bg-black/60 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            {/* Logo with Image */}
            <Link
              href={routes.home}
              className="flex items-center gap-3 group transition-all duration-200 hover:scale-105"
            >
              <div className="relative h-10 w-10">
                <Image
                  src="/assets/logos/abraham-london-logo.png"
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
                  Strategy & Ventures
                </span>
              </div>
            </Link>

            <nav className="flex items-center gap-6 text-sm text-gray-200">
              {navLinks.map((item) => {
                const isExternal = item.external === true || item.href.startsWith("http");
                if (isExternal) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-softGold transition-colors duration-200 font-medium"
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="hover:text-softGold transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/70 py-6 text-center text-sm text-gray-300">
          <div className="mx-auto max-w-6xl px-4">
            <p>© {year} Abraham of London. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-400">
              Built with discipline, designed for legacy.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;