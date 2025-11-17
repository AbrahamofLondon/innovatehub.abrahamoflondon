// pages/innovatehub.tsx

import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { siteConfig } from "@/lib/siteConfig";
import { BrandCard } from "@/components/BrandCard";

const earlyAccessForm = "/forms/early-access.html";

const AOF_URL =
  siteConfig.socialLinks.find((link) => link.label === "Abraham of London")
    ?.href || "https://www.abrahamoflondon.org";

// Build a sensible canonical URL for this page
const baseSiteUrl =
  (typeof siteConfig.siteUrl === "string" && siteConfig.siteUrl.trim()) ||
  "https://www.abrahamoflondon.org";

const canonicalUrl = `${baseSiteUrl.replace(/\/$/, "")}/innovatehub`;

export default function InnovateHub(): JSX.Element {
  const year = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InnovateHub",
    url: canonicalUrl,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.author,
      url: AOF_URL,
    },
    sameAs:
      Array.isArray(siteConfig.socialLinks) && siteConfig.socialLinks.length
        ? siteConfig.socialLinks.map((link) => link.href)
        : [],
    description:
      "InnovateHub helps founders ship durable products with strategy, ethics, and disciplined execution—part of the Abraham of London family alongside Alomarada and Endureluxe.",
  };

  return (
    <>
      <Head>
        <title>InnovateHub — Abraham of London Ventures</title>
        <meta
          name="description"
          content="Strategy, playbooks, and hands-on support to ship durable products and sustainable services. Part of the Abraham of London family with Alomarada and Endureluxe."
        />
        <meta
          property="og:title"
          content="InnovateHub — Abraham of London Ventures"
        />
        <meta
          property="og:description"
          content="Build for longevity: strategy, ethics, and excellent craft—powered by the Abraham of London ecosystem."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#0b2e1f" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/assets/social/innovatehub.ico" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Layout title="InnovateHub — Abraham of London Ventures">
        <main className="min-h-screen bg-gradient-to-b from-black via-deepCharcoal to-black text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            {/* Eyebrow + provenance */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-softGold/80">
              An Abraham of London venture
            </p>

            {/* HERO */}
            <section className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-5">
                <h1 className="font-serif text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
                  InnovateHub
                </h1>
                <p className="text-sm text-gray-300">
                  Tools, playbooks, and hands-on support to ship{" "}
                  <span className="border-b border-softGold/60 pb-0.5">
                    durable
                  </span>{" "}
                  products—rooted in ethics, strategy, and excellent craft.
                </p>
                <p className="text-sm text-gray-300 md:text-base">
                  If you&apos;re serious about building something that survives
                  trends, funding cycles, and culture swings, this is where we
                  work the problem together—with discipline, not drama.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={earlyAccessForm}
                    className="rounded-full bg-softGold px-7 py-3 text-sm font-semibold text-black shadow-xl shadow-softGold/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    Get early access
                  </Link>
                  <Link
                    href={AOF_URL}
                    className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abraham of London
                  </Link>
                </div>

                <p className="mt-3 text-xs text-gray-400">
                  First cohorts will be small, focused, and accountable. If you
                  want “vibes,” scroll elsewhere. If you want clarity and
                  execution, you&apos;re in the right place.
                </p>
              </div>

              {/* Logo / identity card */}
              <aside className="w-full max-w-sm rounded-3xl border border-white/10 bg-gradient-to-br from-deepCharcoal via-black to-forest/60 p-6 shadow-2xl shadow-black/70">
                <div className="rounded-2xl bg-white/5 p-4">
                  <img
                    src="/assets/logos/innovatehub-logo-full.jpg"
                    alt="InnovateHub logo by Abraham of London"
                    className="h-auto w-full max-w-xs"
                  />
                </div>
                <div className="mt-4 space-y-2 text-xs text-gray-300">
                  <p>
                    Part of the{" "}
                    <span className="font-semibold text-softGold">
                      Abraham of London
                    </span>{" "}
                    ecosystem.
                  </p>
                  <p>
                    Works alongside{" "}
                    <span className="font-semibold">Alomarada</span> (board and
                    market systems) and{" "}
                    <span className="font-semibold">Endureluxe</span> (durable
                    luxury performance gear).
                  </p>
                  <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-softGold/80">
                    {year} · Strategy, ethics, execution.
                  </p>
                </div>
              </aside>
            </section>

            {/* PILLARS */}
            <section className="mt-16 space-y-8">
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl font-semibold text-cream md:text-3xl">
                  What InnovateHub is actually for
                </h2>
                <p className="mt-3 text-sm text-gray-300 md:text-base">
                  This isn&apos;t a content farm. It&apos;s a disciplined lab
                  for builders who want to ship work that still makes sense 10
                  years from now—commercially, ethically, and spiritually.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <article className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-gray-200 shadow-xl shadow-black/50">
                  <h3 className="font-serif text-lg font-semibold text-cream">
                    Strategic clarity
                  </h3>
                  <p className="mt-2">
                    Positioning, offers, and roadmaps that stop you chasing
                    every opportunity and lock you into the ones that matter.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-gray-200 shadow-xl shadow-black/50">
                  <h3 className="font-serif text-lg font-semibold text-cream">
                    Disciplined execution
                  </h3>
                  <p className="mt-2">
                    Playbooks, cadences, and operating rhythms that turn intent
                    into compounding progress—not heroic all-nighters.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-gray-200 shadow-xl shadow-black/50">
                  <h3 className="font-serif text-lg font-semibold text-cream">
                    Ethics & legacy
                  </h3>
                  <p className="mt-2">
                    Products and services that respect people, markets, and the
                    God who gave you the mandate to build in the first place.
                  </p>
                </article>
              </div>
            </section>

            {/* ECOSYSTEM */}
            <section className="mt-20">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-cream md:text-3xl">
                    The Abraham of London family
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-gray-300 md:text-base">
                    InnovateHub doesn&apos;t stand alone—it plugs you into a
                    broader architecture of advisory, venture-building, and
                    durable luxury under the Abraham of London banner.
                  </p>
                </div>
                <Link
                  href="/ventures"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-softGold hover:text-amber-200"
                >
                  View all ventures
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {Array.isArray(siteConfig.ventures) &&
                  siteConfig.ventures.map((venture) => (
                    <BrandCard key={venture.title} {...venture} />
                  ))}
              </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="mt-20 rounded-3xl border border-softGold/30 bg-gradient-to-br from-forest/70 via-deepCharcoal to-black p-10 text-center shadow-2xl shadow-black/70">
              <h3 className="font-serif text-2xl font-semibold text-cream md:text-3xl">
                Build something that doesn&apos;t flinch when the market does.
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-100 md:text-base">
                Early cohorts will shape the tools, sessions, and standards we
                roll out. If you want a serious environment for serious work,
                you&apos;re the person InnovateHub is built for.
              </p>
              <Link
                href={earlyAccessForm}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-softGold px-8 py-3 text-sm font-semibold text-black shadow-xl shadow-softGold/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Request access
              </Link>
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-softGold/80">
                {year} · No hype. Just work.
              </p>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}