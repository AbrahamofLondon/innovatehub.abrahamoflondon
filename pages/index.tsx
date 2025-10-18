import Head from "next/head";
import Link from "next/link";
// Assuming these are external components/configs for a clean structure
// You would need to create these files in your project:
// import { siteConfig } from "@/lib/siteConfig"; 
// import { BrandCard } from "@/components/BrandCard";

// Fallback definitions for components/config not provided, but needed for a complete run
const siteConfig = {
  author: "Abraham of London",
  siteUrl: process.env.NEXT_PUBLIC_INNOVATEHUB_ORIGIN || "https://innovatehub.abrahamoflondon.org",
  socialLinks: [
    { href: process.env.NEXT_PUBLIC_AOF_URL || "https://abrahamoflondon.org" },
    { href: process.env.NEXT_PUBLIC_ALOMARADA_URL || "https://alomarada.com" },
    { href: process.env.NEXT_PUBLIC_ENDURELUXE_URL || "https://endureluxe.com" }
  ],
  ventures: [
    {
      initials: "AØL",
      title: "Abraham of London",
      description: "Strategic stewardship, thought leadership, and the standards that hold the family together.",
      href: process.env.NEXT_PUBLIC_AOF_URL || "https://abrahamoflondon.org",
      cta: "Visit",
      muted: false
    },
    {
      initials: "IH",
      title: "InnovateHub",
      description: "Product and service strategy and hands-on build support for founders who want to trade with integrity and pace.",
      href: "#",
      cta: "You’re here",
      muted: true
    },
    {
      initials: "AL",
      title: "Alomarada",
      description: "Business advisory guiding investors and mentoring African-diaspora entrepreneurs to develop African markets through ethical exploration of market gaps—with a practical commitment to unlocking the continent’s staggering human capital.",
      href: process.env.NEXT_PUBLIC_ALOMARADA_URL || "https://alomarada.com",
      cta: "Learn more",
      muted: false
    },
    {
      initials: "EL",
      title: "Endureluxe",
      description: "Premium, sustainable fitness partnerships that promote wellbeing—powered by community and thoughtful technology, and complemented by writing that advances state-of-the-art knowledge and practical life wisdom.",
      href: process.env.NEXT_PUBLIC_ENDURELUXE_URL || "https://endureluxe.com",
      cta: "Discover",
      muted: false
    }
  ]
};

// Re-using the BrandCard component definition from the original provided code block
type BrandCardProps = {
  initials: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  muted?: boolean;
};

function BrandCard({ initials, title, description, href, cta, muted }: BrandCardProps) {
  return (
    <article className={`card ${muted ? "opacity-85" : ""} rounded-xl border bg-white p-4 shadow-sm md:grid md:grid-cols-[64px_1fr] md:gap-4`}>
      <div className="logo mb-4 h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-950 to-green-800 font-extrabold text-white tracking-wider text-lg md:mb-0">
        {initials}
      </div>
      <div>
        <h3 className="cardTitle text-xl font-bold text-green-950">{title}</h3>
        <p className="cardText mt-1 mb-2 text-gray-700 opacity-92">{description}</p>
        <a
          className={`link text-green-950 underline font-bold transition hover:text-green-800 ${muted ? "pointer-events-none opacity-55" : ""}`}
          href={href}
          {...(muted ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {cta}
        </a>
      </div>
    </article>
  );
}
const earlyAccessForm = "/forms/early-access.html";

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
      url: siteConfig.socialLinks[0].href, // Assuming AOF is the primary parent URL
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

      {/* Tailwind classes replace all the JSX styling for a cleaner, modern look */}
      <main className="mx-auto max-w-5xl px-4 py-12 md:py-16 bg-cream text-ink">
        <p className="mb-4 text-sm opacity-85">
          A venture by <Link href={siteConfig.socialLinks[0].href} className="text-green-950 underline">{siteConfig.author}</Link>
        </p>

        {/* Hero */}
        <header className="py-8">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-950 to-green-800 font-extrabold tracking-wide text-white" aria-hidden="true">
            IH
          </div>
          <h1 className="font-serif text-4xl font-extrabold leading-tight text-green-950 md:text-6xl">
            InnovateHub
          </h1>
          <p className="mt-4 max-w-xl text-lg opacity-90 md:text-xl">
            Tools, playbooks, and hands-on support to ship{" "}
            <em className="inline-block border-b-2 border-b-green-800/25 font-normal not-italic">
              durable
            </em>{" "}
            products—rooted in ethics, strategy, and excellent craft.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={earlyAccessForm} className="rounded-full bg-green-950 px-5 py-3 font-bold text-white transition hover:bg-green-800 transform hover:-translate-y-0.5 shadow-md">
              Get Early Access
            </Link>
            <Link href={siteConfig.socialLinks[0].href} className="rounded-full border border-gray-200 bg-white px-5 py-3 font-bold text-green-950 transition hover:bg-gray-50 transform hover:-translate-y-0.5 shadow-sm">
              Abraham of London
            </Link>
          </div>
        </header>

        {/* Story */}
        <section className="mt-8">
          <p className="max-w-prose opacity-95">
            Guided by Abraham of London, InnovateHub balances principle with performance. We help you find strategic clarity, focus on the levers that actually move value, and build for longevity—not trend cycles.
          </p>
        </section>

        {/* Pillars */}
        <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition hover:shadow-xl">
            <h3 className="text-xl font-bold text-green-950">Strategic Clarity</h3>
            <p className="mt-2 text-gray-700">
              Positioning, roadmaps, and decision frameworks that cut noise and accelerate outcomes.
            </p>
          </article>
          <article className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition hover:shadow-xl">
            <h3 className="text-xl font-bold text-green-950">Disciplined Execution</h3>
            <p className="mt-2 text-gray-700">
              Pragmatic playbooks and coaching that turn intent into compounding progress.
            </p>
          </article>
          <article className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition hover:shadow-xl">
            <h3 className="text-xl font-bold text-green-950">Community & Ethics</h3>
            <p className="mt-2 text-gray-700">
              We optimise for long-term trust—products that respect people, markets, and the future they shape.
            </p>
          </article>
        </section>

        {/* Ecosystem */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-green-950 mb-6">
            The Abraham of London Family
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {siteConfig.ventures.map((venture) => (
              <BrandCard key={venture.title} {...venture} />
            ))}
          </div>
        </section>

        {/* Callout */}
        <section className="mt-12 rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-green-950">Build Something Enduring</h3>
          <p className="mt-3 opacity-90 max-w-xl mx-auto">
            Join the early cohort shaping InnovateHub—access to playbooks, office hours, and collaboration pathways across Alomarada and Endureluxe.
          </p>
          <Link
            href={earlyAccessForm}
            className="mt-6 inline-block rounded-full bg-green-950 px-6 py-3 text-lg font-bold text-white transition hover:bg-green-800 transform hover:-translate-y-0.5 shadow-xl"
          >
            Request Access
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center border-t border-gray-200 pt-6">
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-green-950 hover:underline">Home</Link>
            <Link href={earlyAccessForm} className="text-green-950 hover:underline">Early Access</Link>
            <Link href="/contact" className="text-green-950 hover:underline">Contact</Link>
            <Link href={siteConfig.socialLinks[0].href} className="text-green-950 hover:underline">Abraham of London</Link>
          </nav>
          <p className="mt-4 text-sm opacity-70">
            © {year} Abraham of London. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}