// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import { Moon, SunMedium, ArrowRight, BookOpen, Users, Target, Star, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import { siteConfig, getFeaturedVentures } from "@/lib/siteConfig";
import { BrandCard } from "@/components/BrandCard";

export default function Home() {
  const year = new Date().getFullYear();
  const [isDark, setIsDark] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);

  // Theme management
  React.useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("aof-theme");
      if (stored === "light" || stored === "dark") {
        setIsDark(stored === "dark");
        return;
      }
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
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

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <Layout title={siteConfig.title}>
        <div className="min-h-screen bg-gray-100" />
      </Layout>
    );
  }

  const featuredVentures = getFeaturedVentures();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    knowsAbout: siteConfig.keywords,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.brand.name,
    },
  };

  // Theme classes
  const shellClass = isDark 
    ? "min-h-screen bg-gradient-to-br from-deepCharcoal via-gray-900 to-black text-cream"
    : "min-h-screen bg-gradient-to-br from-warmWhite via-cream to-white text-ink";

  const cardClass = isDark
    ? "border-white/10 bg-white/5 hover:border-softGold/30 hover:bg-white/10 backdrop-blur-sm"
    : "border-lightGrey bg-white hover:border-forest/30 hover:shadow-xl";

  const primaryButtonClass = isDark
    ? "bg-softGold text-deepCharcoal hover:bg-softGold/90 shadow-lg hover:shadow-softGold/25"
    : "bg-forest text-cream hover:bg-forest/90 shadow-lg hover:shadow-forest/25";

  const secondaryButtonClass = isDark
    ? "border-white/20 bg-transparent text-cream hover:bg-white/10"
    : "border-lightGrey bg-white text-ink hover:bg-warmWhite";

  return (
    <>
      <Head>
        <title>{siteConfig.title} — {siteConfig.brand.tagline}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content={isDark ? "#0f172a" : "#f7f5ee"} />
        <link rel="canonical" href={siteConfig.siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Layout title={siteConfig.title}>
        <div className={shellClass}>
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
            {/* Header with theme toggle */}
            <div className="flex items-start justify-between gap-4 mb-12">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? "text-softGold/80" : "text-forest/80"}`}>
                  Strategic Stewardship
                </p>
              </div>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-sm transition-all ${
                  isDark
                    ? "border-white/15 bg-white/5 text-cream hover:bg-white/10"
                    : "border-lightGrey bg-white text-ink hover:bg-warmWhite"
                }`}
                aria-label="Toggle light/dark mode"
              >
                {isDark ? (
                  <>
                    <SunMedium className="h-4 w-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            {/* Enhanced Hero Section */}
            <header className="py-16 text-center">
              <div className="mb-8 flex justify-center">
                <div className={`rounded-3xl p-8 ${isDark ? "bg-white/5" : "bg-forest/5"}`}>
                  <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
                    Abraham{" "}
                    <span className={`block mt-2 ${isDark ? "text-softGold" : "text-forest"}`}>
                      of London
                    </span>
                  </h1>
                </div>
              </div>

              <p className={`mx-auto mt-8 max-w-3xl text-2xl leading-relaxed md:text-3xl ${isDark ? "text-gray-200" : "text-deepCharcoal"}`}>
                {siteConfig.brand.tagline}
                <span className={`block mt-4 text-xl ${isDark ? "text-gray-300" : "text-slate-600"}`}>
                  {siteConfig.brand.mission}
                </span>
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Link
                  href="/about"
                  className={`rounded-full px-8 py-4 font-bold transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 ${primaryButtonClass}`}
                >
                  <BookOpen className="inline h-5 w-5 mr-2" />
                  Our Story
                </Link>
                <Link
                  href="/ventures"
                  className={`rounded-full border px-8 py-4 font-bold transition-all duration-200 transform hover:-translate-y-0.5 ${secondaryButtonClass}`}
                >
                  Explore Ventures
                </Link>
              </div>
            </header>

            {/* Core Values */}
            <section className="mt-24">
              <div className="text-center mb-16">
                <h2 className={`font-serif text-4xl font-bold mb-6 ${isDark ? "text-cream" : "text-deepCharcoal"}`}>
                  Our Guiding Principles
                </h2>
                <p className={`max-w-2xl mx-auto text-lg ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                  Every venture, partnership, and initiative is built upon these foundational values
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {siteConfig.brand.values.map((value, index) => (
                  <div 
                    key={value}
                    className={`rounded-2xl border p-8 text-center transition-all duration-300 transform hover:-translate-y-2 ${cardClass}`}
                  >
                    <div className={`rounded-xl p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4 ${isDark ? "bg-softGold/10" : "bg-forest/10"}`}>
                      {index === 0 && <Shield className={isDark ? "h-6 w-6 text-softGold" : "h-6 w-6 text-forest"} />}
                      {index === 1 && <Target className={isDark ? "h-6 w-6 text-softGold" : "h-6 w-6 text-forest"} />}
                      {index === 2 && <Users className={isDark ? "h-6 w-6 text-softGold" : "h-6 w-6 text-forest"} />}
                      {index > 2 && <Star className={isDark ? "h-6 w-6 text-softGold" : "h-6 w-6 text-forest"} />}
                    </div>
                    <h3 className="text-xl font-bold font-serif">{value}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Ventures */}
            <section className="mt-24">
              <div className="text-center mb-16">
                <h2 className={`font-serif text-4xl font-bold mb-6 ${isDark ? "text-cream" : "text-deepCharcoal"}`}>
                  Strategic Ventures
                </h2>
                <p className={`max-w-2xl mx-auto text-lg ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                  A curated portfolio of initiatives designed for lasting impact across multiple domains
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {featuredVentures.map((venture) => (
                  <BrandCard 
                    key={venture.title} 
                    {...venture} 
                    theme={isDark ? 'dark' : 'light'}
                  />
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/ventures"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all ${secondaryButtonClass}`}
                >
                  View All Ventures
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            {/* Thought Leadership */}
            <section className={`mt-24 rounded-3xl border p-12 ${isDark ? "border-white/10 bg-white/5" : "border-lightGrey bg-white shadow-2xl"}`}>
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                  <h2 className={`font-serif text-4xl font-bold mb-6 ${isDark ? "text-cream" : "text-deepCharcoal"}`}>
                    Thought Leadership
                  </h2>
                  <p className={`text-lg leading-relaxed mb-6 ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                    Insights on fatherhood, legacy building, strategic leadership, and creating ventures 
                    that stand the test of time.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/blog"
                      className={`rounded-full px-6 py-3 font-semibold transition-all ${primaryButtonClass}`}
                    >
                      Read the Blog
                    </Link>
                    <Link
                      href="/books"
                      className={`rounded-full border px-6 py-3 font-semibold transition-all ${secondaryButtonClass}`}
                    >
                      Explore Books
                    </Link>
                  </div>
                </div>
                <div className={`rounded-2xl p-8 text-center ${isDark ? "bg-white/5" : "bg-forest/5"}`}>
                  <BookOpen className={`h-16 w-16 mx-auto mb-4 ${isDark ? "text-softGold" : "text-forest"}`} />
                  <p className={`text-sm uppercase tracking-widest ${isDark ? "text-softGold" : "text-forest"}`}>
                    Latest Insights
                  </p>
                  <p className={`mt-2 text-lg font-serif ${isDark ? "text-cream" : "text-deepCharcoal"}`}>
                    Building for generations, not just quarters
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mt-24 text-center">
              <h2 className={`font-serif text-4xl font-bold mb-6 ${isDark ? "text-cream" : "text-deepCharcoal"}`}>
                Begin the Conversation
              </h2>
              <p className={`max-w-2xl mx-auto text-lg mb-8 ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                Whether you're exploring partnership opportunities, seeking strategic guidance, 
                or simply want to connect around shared values, we welcome the dialogue.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className={`rounded-full px-8 py-4 font-bold transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 ${primaryButtonClass}`}
                >
                  Get in Touch
                </Link>
                <Link
                  href="/about"
                  className={`rounded-full border px-8 py-4 font-bold transition-all duration-200 ${secondaryButtonClass}`}
                >
                  Learn More
                </Link>
              </div>
            </section>

            {/* Enhanced Footer */}
            <footer className={`mt-24 border-t pt-12 ${isDark ? "border-white/10" : "border-lightGrey"}`}>
              <div className="grid gap-8 md:grid-cols-4">
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-4">{siteConfig.brand.name}</h4>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                    {siteConfig.brand.tagline}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-4">Explore</h4>
                  <nav className="flex flex-col gap-2">
                    <Link href="/about" className={`text-sm hover:underline ${isDark ? "text-gray-400 hover:text-softGold" : "text-slate-600 hover:text-forest"}`}>
                      Our Story
                    </Link>
                    <Link href="/ventures" className={`text-sm hover:underline ${isDark ? "text-gray-400 hover:text-softGold" : "text-slate-600 hover:text-forest"}`}>
                      Ventures
                    </Link>
                    <Link href="/blog" className={`text-sm hover:underline ${isDark ? "text-gray-400 hover:text-softGold" : "text-slate-600 hover:text-forest"}`}>
                      Insights
                    </Link>
                    <Link href="/contact" className={`text-sm hover:underline ${isDark ? "text-gray-400 hover:text-softGold" : "text-slate-600 hover:text-forest"}`}>
                      Contact
                    </Link>
                  </nav>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-semibold mb-4">Ventures</h4>
                  <nav className="flex flex-col gap-2">
                    {siteConfig.ventures.map((venture) => (
                      <a 
                        key={venture.title}
                        href={venture.href} 
                        className={`text-sm hover:underline ${isDark ? "text-gray-400 hover:text-softGold" : "text-slate-600 hover:text-forest"}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {venture.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-semibold mb-4">Connect</h4>
                  <nav className="flex flex-col gap-2">
                    {siteConfig.socialLinks
                      .filter(link => link.label !== "Abraham of London")
                      .map((link) => (
                        <a 
                          key={link.label}
                          href={link.href}
                          className={`text-sm hover:underline ${isDark ? "text-gray-400 hover:text-softGold" : "text-slate-600 hover:text-forest"}`}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                        >
                          {link.label}
                        </a>
                      ))
                    }
                  </nav>
                </div>
              </div>

              <div className={`mt-12 pt-8 text-center border-t ${isDark ? "border-white/10" : "border-lightGrey"}`}>
                <p className={`text-sm ${isDark ? "text-gray-500" : "text-slate-500"}`}>
                  {siteConfig.copyright}
                  <span className="block mt-2 text-xs">
                    Built with discipline, designed for legacy.
                  </span>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </Layout>
    </>
  );
}