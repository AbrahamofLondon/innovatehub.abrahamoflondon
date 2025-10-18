// pages/innovatehub.tsx

import Head from "next/head";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { BrandCard } from "@/components/BrandCard";

const earlyAccessForm = "/forms/early-access.html";
// Assuming AOF_URL is available through siteConfig or ENV
const AOF_URL = siteConfig.socialLinks.find(link => link.label === "Abraham of London")?.href || "/";


export default function InnovateHub() {
  const year = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InnovateHub",
    url: siteConfig.siteUrl,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.author,
      // Use the explicit AOF URL for the parent organization
      url: AOF_URL, 
    },
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    description: "InnovateHub helps founders ship durable products with strategy, ethics, and disciplined execution—part of the Abraham of London family alongside Alomarada and Endureluxe.",
  };

  return (
    <>
      <Head>
        <title>InnovateHub — Abraham of London Ventures</title>
        <meta
          name="description"
          content="Strategy, playbooks, and hands-on support to ship durable products and sustainable services. Part of the Abraham of London family with Alomarada (investor advisory & African-diaspora mentoring) and Endureluxe (premium, sustainable fitness partnerships)."
        />
        <meta property="og:title" content="InnovateHub — Abraham of London Ventures" />
        <meta
          property="og:description"
          content="Build for longevity: strategy, ethics, and excellent craft—powered by the Abraham of London ecosystem."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#0b2e1f" />
        <link rel="canonical" href={siteConfig.siteUrl} />
        <link rel="icon" href="/assets/social/innovatehub.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Increased py padding on mobile for more space, ensuring max-w-5xl is respected */}
      <main className="mx-auto max-w-5xl px-4 py-16 md:py-24"> 
        
        <p className="mb-4 text-sm opacity-85">
          {/* Changed link destination to AOF_URL and added underline style */}
          A venture by <a href={AOF_URL} className="text-green-950 underline hover:no-underline">{siteConfig.author}</a> 
        </p>

        {/* Hero */}
        <header className="py-8">
          {/* Enhanced marker for depth */}
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-950 to-green-800 font-extrabold tracking-wide text-white shadow-xl" aria-hidden="true">
            IH
          </div>
          <h1 className="font-serif text-5xl font-extrabold leading-tight text-green-950 md:text-6xl">
            InnovateHub
          </h1>
          <p className="mt-4 max-w-xl text-xl opacity-90 md:text-2xl">
            Tools, playbooks, and hands-on support to ship{" "}
            <em className="inline-block border-b-2 border-b-green-800/25 font-normal not-italic">
              durable
            </em>{" "}
            products—rooted in ethics, strategy, and excellent craft.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primary Button: Added hover transform and shadow */}
            <Link 
              href={earlyAccessForm} 
              className="rounded-full bg-green-950 px-6 py-3 font-bold text-white transition-all duration-200 hover:bg-green-800 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Early Access
            </Link>
            {/* Secondary Button: Added hover transform and shadow */}
            <Link 
              href={AOF_URL} 
              className="rounded-full border border-gray-200 bg-white px-6 py-3 font-bold text-green-950 transition-all duration-200 hover:bg-gray-50 hover:shadow-md transform hover:-translate-y-0.5"
            >
              Abraham of London
            </Link>
          </div>
        </header>

        {/* Story */}
        <section className="mt-12">
          <p className="max-w-prose opacity-95 text-lg">
            Guided by Abraham of London, InnovateHub balances principle with performance. We help you find strategic clarity, focus on the levers that actually move value, and build for longevity—not trend cycles.
          </p>
        </section>

        {/* Pillars - Added strong shadow and hover effect for premium feel */}
        <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border border-gray-100 bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-green-700/50">
            <h3 className="text-xl font-bold text-green-950">Strategic Clarity</h3>
            <p className="mt-2 text-gray-700">
              Positioning, roadmaps, and decision frameworks that cut noise and accelerate outcomes.
            </p>
          </article>
          <article className="rounded-xl border border-gray-100 bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-green-700/50">
            <h3 className="text-xl font-bold text-green-950">Disciplined Execution</h3>
            <p className="mt-2 text-gray-700">
              Pragmatic playbooks and coaching that turn intent into compounding progress.
            </p>
          </article>
          <article className="rounded-xl border border-gray-100 bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-green-700/50">
            <h3 className="text-xl font-bold text-green-950">Community & Ethics</h3>
            <p className="mt-2 text-gray-700">
              We optimise for long-term trust—products that respect people, markets, and the future they shape.
            </p>
          </article>
        </section>

        {/* Ecosystem */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl font-bold text-green-950 mb-6">
            The Abraham of London Family
          </h2>
          {/* Increased gap between cards */}
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {/* Note: BrandCard component is assumed to handle its own premium styling */}
            {siteConfig.ventures.map((venture) => (
              <BrandCard key={venture.title} {...venture} />
            ))}
          </div>
        </section>

        {/* Callout - Increased shadow and padding */}
        <section className="mt-16 rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-green-950">Build Something Enduring</h3>
          <p className="mt-3 opacity-90 max-w-xl mx-auto text-lg">
            Join the early cohort shaping InnovateHub—access to playbooks, office hours, and collaboration pathways across Alomarada and Endureluxe.
          </p>
          <Link
            href={earlyAccessForm}
            // Primary button style with strong hover effect
            className="mt-6 inline-block rounded-full bg-green-950 px-8 py-3 text-lg font-bold text-white transition-all duration-200 hover:bg-green-800 hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Request Access
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center border-t border-gray-200 pt-8">
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-green-950 hover:underline">Home</Link>
            <Link href={earlyAccessForm} className="text-green-950 hover:underline">Early Access</Link>
            <Link href="/contact" className="text-green-950 hover:underline">Contact</Link>
            {/* Link explicitly to AOF URL */}
            <a href={AOF_URL} className="text-green-950 hover:underline">Abraham of London</a>
          </nav>
          <p className="mt-4 text-sm opacity-70">
            © {year} Abraham of London. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}