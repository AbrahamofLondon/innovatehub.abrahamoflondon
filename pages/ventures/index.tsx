// pages/ventures/index.tsx

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import {
  ArrowRight,
  Building2,
  PackageCheck,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Moon,
  SunMedium,
} from "lucide-react";

import Layout from "@/components/Layout";
import { pickEnvUrl, ENV_KEYS } from "@/lib/utils";

type VentureStatus = "Active" | "Emerging" | "In development";

interface Venture {
  name: string;
  slug?: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  status: VentureStatus | string;
  focus: string;
  externalLabel?: string;
}

// Safe URL resolution with environment variable fallbacks
const ALOMARADA_URL = pickEnvUrl(
  [ENV_KEYS.ALOMARADA_URL],
  "https://alomarada.com"
);

const ENDURELUXE_URL = pickEnvUrl(
  [ENV_KEYS.ENDURELUXE_URL],
  "https://alomarada.com/endureluxe"
);

const INNOVATEHUB_URL = pickEnvUrl(
  [ENV_KEYS.INNOVATEHUB_URL, ENV_KEYS.INNOVATEHUB_ALT_URL],
  "https://innovatehub.abrahamoflondon.org"
);

const ventures: Venture[] = [
  {
    name: "Alomarada Ltd",
    slug: "alomarada",
    description:
      "Board-level advisory, operating systems, and market-entry strategy for Africa-focused founders, boards, and institutions.",
    icon: Building2,
    href: ALOMARADA_URL,
    status: "Active",
    focus: "Strategic Advisory & Market Systems",
    externalLabel: "Visit Alomarada.com",
  },
  {
    name: "Endureluxe",
    slug: "endureluxe",
    description:
      "Durable luxury performance gear for people who train, build, and endure – without compromising on quality or aesthetics.",
    icon: PackageCheck,
    href: ENDURELUXE_URL,
    status: "In development",
    focus: "Performance & Durable Luxury",
    externalLabel: "Explore Endureluxe",
  },
  {
    name: "InnovateHub",
    slug: "innovatehub",
    description:
      "Strategy, playbooks, and hands-on support to help founders test ideas, ship durable products, and stay accountable.",
    icon: Lightbulb,
    href: INNOVATEHUB_URL,
    status: "Emerging",
    focus: "Innovation & Capability Building",
    externalLabel: "Visit InnovateHub",
  },
];

const VenturesPage: NextPage = () => {
  const [isDark, setIsDark] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);

  // Only run theme detection after component mounts to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("aof-theme");
      if (stored === "light" || stored === "dark") {
        setIsDark(stored === "dark");
        return;
      }
      // Fallback to system preference
      const prefersDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("aof-theme", next ? "dark" : "light");
      } catch {
        // ignore localStorage errors
      }
      return next;
    });
  };

  // Avoid rendering theme-dependent content until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Layout title="Strategic Ventures | Abraham of London">
        <div className="min-h-screen bg-gray-100" />
      </Layout>
    );
  }

  const shellClass = isDark
    ? "min-h-screen bg-gradient-to-b from-black via-deepCharcoal to-black text-cream"
    : "min-h-screen bg-gradient-to-b from-warmWhite via-white to-warmWhite text-ink";

  return (
    <Layout title="Strategic Ventures | Abraham of London">
      <Head>
        <title>Strategic Ventures | Abraham of London</title>
        <meta
          name="description"
          content="Explore the strategic ventures and business initiatives under Abraham of London – Alomarada Ltd, Endureluxe, and InnovateHub."
        />
      </Head>

      <div className={shellClass}>
        <div className="mx-auto flex max-w-6xl flex-col px-4 pb-20 pt-10">
          {/* Header row: title + theme toggle */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-softGold/80">
                Abraham of London · Ventures
              </p>
              <h1 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                Strategic Ventures
              </h1>
              <p className="mt-4 max-w-3xl text-base md:text-lg text-gray-600 dark:text-gray-200">
                Disciplined, faith-rooted initiatives built to create sustainable
                impact, not just headlines. Every venture is a focused expression
                of the same conviction: truth, responsibility, and legacy.
              </p>
            </div>

            {/* Light / dark toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold shadow-sm transition-all",
                isDark
                  ? "border-white/15 bg-white/5 text-cream hover:bg-white/10"
                  : "border-lightGrey bg-white text-ink hover:bg-warmWhite",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-label="Toggle light/dark mode"
            >
              {isDark ? (
                <>
                  <SunMedium className="h-4 w-4" />
                  <span>Light mode</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  <span>Dark mode</span>
                </>
              )}
            </button>
          </div>

          {/* Ventures Grid */}
          <section className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ventures.map((venture) => (
              <article
                key={venture.slug ?? venture.name}
                className={[
                  "group rounded-2xl border p-6 transition-all duration-300",
                  isDark
                    ? "border-white/10 bg-white/5 hover:border-softGold/50 hover:bg-white/10"
                    : "border-lightGrey bg-white hover:border-forest/30 hover:shadow-lg",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div
                    className={[
                      "rounded-xl p-3",
                      isDark ? "bg-softGold/10" : "bg-forest/5",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <venture.icon
                      className={
                        isDark
                          ? "h-6 w-6 text-softGold"
                          : "h-6 w-6 text-forest"
                      }
                    />
                  </div>
                  <span
                    className={[
                      "rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide",
                      venture.status === "Active"
                        ? isDark
                          ? "bg-emerald-500/10 text-emerald-200"
                          : "bg-emerald-100 text-emerald-800"
                        : venture.status === "Emerging"
                        ? isDark
                          ? "bg-sky-500/10 text-sky-200"
                          : "bg-sky-100 text-sky-800"
                        : isDark
                        ? "bg-amber-500/10 text-amber-200"
                        : "bg-amber-100 text-amber-800",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {venture.status}
                  </span>
                </div>

                <h2 className="font-serif text-xl font-semibold">
                  {venture.name}
                </h2>
                <p
                  className={[
                    "mt-3 text-sm leading-relaxed",
                    isDark ? "text-gray-300" : "text-slate-700",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {venture.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span
                    className={[
                      "text-xs font-medium uppercase tracking-[0.16em]",
                      isDark ? "text-softGold/80" : "text-forest/80",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {venture.focus}
                  </span>

                  <Link
                    href={venture.href}
                    className={[
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                      isDark
                        ? "bg-softGold/15 text-softGold hover:bg-softGold/25"
                        : "bg-forest text-white hover:bg-forest/90",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{venture.externalLabel ?? "Visit site"}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </section>

          {/* Investment Philosophy */}
          <section
            className={[
              "rounded-3xl border px-8 py-10 md:px-10 md:py-12",
              isDark
                ? "border-white/15 bg-white/5"
                : "border-lightGrey bg-white",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <h2 className="mb-8 text-center font-serif text-2xl font-semibold md:text-3xl">
              Our Investment Philosophy
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div
                  className={[
                    "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full",
                    isDark ? "bg-forest/30" : "bg-forest/10",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Target
                    className={
                      isDark ? "h-6 w-6 text-softGold" : "h-6 w-6 text-forest"
                    }
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Strategic Alignment
                </h3>
                <p
                  className={
                    isDark ? "text-sm text-gray-300" : "text-sm text-slate-700"
                  }
                >
                  Every venture must align with our core mission: faith-rooted
                  leadership, disciplined strategy, and legacy building across
                  generations.
                </p>
              </div>

              <div className="text-center">
                <div
                  className={[
                    "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full",
                    isDark ? "bg-softGold/25" : "bg-softGold/20",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <TrendingUp
                    className={
                      isDark ? "h-6 w-6 text-softGold" : "h-6 w-6 text-forest"
                    }
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Sustainable Impact
                </h3>
                <p
                  className={
                    isDark ? "text-sm text-gray-300" : "text-sm text-slate-700"
                  }
                >
                  We prioritise long-term value creation over quick wins.
                  Ventures are designed to be cashflow-aware, scalable, and
                  principled.
                </p>
              </div>

              <div className="text-center">
                <div
                  className={[
                    "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full",
                    isDark ? "bg-forest/30" : "bg-forest/10",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Users
                    className={
                      isDark ? "h-6 w-6 text-softGold" : "h-6 w-6 text-forest"
                    }
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Community Focus
                </h3>
                <p
                  className={
                    isDark ? "text-sm text-gray-300" : "text-sm text-slate-700"
                  }
                >
                  We build ecosystems, not celebrity brands – brotherhoods,
                  advisory circles, and operating systems that outlast any one
                  individual.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default VenturesPage;