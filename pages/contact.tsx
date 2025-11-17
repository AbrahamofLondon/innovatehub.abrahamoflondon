// pages/contact.tsx

import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { Moon, SunMedium, Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { siteConfig } from "@/lib/siteConfig";

const AOF_URL =
  process.env.NEXT_PUBLIC_AOF_URL ||
  siteConfig.siteUrl ||
  "https://www.abrahamoflondon.org";

const baseSiteUrl =
  (typeof siteConfig.siteUrl === "string" && siteConfig.siteUrl.trim()) ||
  "https://www.abrahamoflondon.org";

const canonicalUrl = `${baseSiteUrl.replace(/\/$/, "")}/contact`;

export default function Contact(): JSX.Element {
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
      <Layout title="Contact — InnovateHub by Abraham of London">
        <div className="min-h-screen bg-gray-100" />
      </Layout>
    );
  }

  // Theme classes
  const shellClass = isDark 
    ? "min-h-screen bg-gradient-to-br from-deepCharcoal via-gray-900 to-black text-cream"
    : "min-h-screen bg-gradient-to-br from-warmWhite via-cream to-white text-ink";

  const cardClass = isDark
    ? "border-white/10 bg-white/5 backdrop-blur-sm"
    : "border-lightGrey bg-white shadow-lg";

  const primaryTextClass = isDark ? "text-cream" : "text-deepCharcoal";
  const secondaryTextClass = isDark ? "text-gray-300" : "text-slate-700";
  const accentTextClass = isDark ? "text-softGold" : "text-forest";

  const contactInfoClass = isDark 
    ? "bg-white/5 border-white/10" 
    : "bg-forest/5 border-lightGrey";

  return (
    <>
      <Head>
        <title>Contact — InnovateHub by Abraham of London</title>
        <meta
          name="description"
          content="Contact InnovateHub for product strategy and durable execution. We also handle enquiries for Alomarada and Endureluxe within the Abraham of London ecosystem."
        />
        <meta name="theme-color" content={isDark ? "#0f172a" : "#f7f5ee"} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <Layout title="Contact — InnovateHub by Abraham of London">
        <div className={shellClass}>
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
            {/* Header with theme toggle */}
            <div className="flex items-start justify-between gap-4 mb-12">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentTextClass}`}>
                  A venture from{" "}
                  <a
                    href={AOF_URL}
                    className={`hover:underline ${isDark ? "text-softGold" : "text-forest"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abraham of London
                  </a>
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

            {/* Enhanced Header */}
            <header className="pb-12 text-center">
              <p className={`text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${accentTextClass}`}>
                Get in Touch
              </p>
              <h1 className={`mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl ${primaryTextClass}`}>
                Contact InnovateHub
              </h1>
              <p className={`mt-6 max-w-2xl mx-auto text-lg leading-relaxed ${secondaryTextClass}`}>
                Tell us where you are, what you&apos;re building, and what{" "}
                <span className={`border-b ${isDark ? "border-softGold/50" : "border-forest/50"} pb-0.5 font-medium`}>
                  durable
                </span>{" "}
                looks like for you.
              </p>
            </header>

            {/* Contact Information */}
            <section className="mb-12">
              <div className={`rounded-2xl border p-8 ${contactInfoClass}`}>
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${isDark ? "bg-softGold/10" : "bg-forest/10"}`}>
                      <Mail className={isDark ? "h-6 w-6 text-softGold" : "h-6 w-6 text-forest"} />
                    </div>
                    <h3 className={`font-serif text-lg font-semibold mb-2 ${primaryTextClass}`}>Email</h3>
                    <a 
                      href="mailto:info@abrahamoflondon.org" 
                      className={`text-sm hover:underline ${secondaryTextClass}`}
                    >
                      info@abrahamoflondon.org
                    </a>
                  </div>

                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${isDark ? "bg-softGold/10" : "bg-forest/10"}`}>
                      <Phone className={isDark ? "h-6 w-6 text-softGold" : "h-6 w-6 text-forest"} />
                    </div>
                    <h3 className={`font-serif text-lg font-semibold mb-2 ${primaryTextClass}`}>Phone</h3>
                    <a 
                      href="tel:+442086225909" 
                      className={`text-sm hover:underline ${secondaryTextClass}`}
                    >
                      +44 20 8622 5909
                    </a>
                  </div>

                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${isDark ? "bg-softGold/10" : "bg-forest/10"}`}>
                      <MapPin className={isDark ? "h-6 w-6 text-softGold" : "h-6 w-6 text-forest"} />
                    </div>
                    <h3 className={`font-serif text-lg font-semibold mb-2 ${primaryTextClass}`}>Based In</h3>
                    <p className={`text-sm ${secondaryTextClass}`}>
                      London, UK
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form Section */}
              <section aria-label="Contact form">
                <div className={`rounded-2xl border p-8 ${cardClass}`}>
                  <h2 className={`font-serif text-2xl font-semibold mb-4 ${primaryTextClass}`}>
                    Send us a Message
                  </h2>
                  <p className={`mb-6 text-sm ${secondaryTextClass}`}>
                    Whether you&apos;re interested in InnovateHub, Alomarada, or Endureluxe, 
                    mention it clearly in your message. We typically reply within{" "}
                    <strong className={primaryTextClass}>2–3 business days</strong>.
                  </p>
                  
                  <iframe
                    src="/forms/contact.html"
                    title="Contact form"
                    className="h-[520px] w-full rounded-xl border transition-all duration-300 hover:shadow-lg"
                  />
                  
                  <p className={`mt-4 text-sm ${secondaryTextClass}`}>
                    Trouble seeing the form?{" "}
                    <a
                      href="/forms/contact.html"
                      className={`font-medium underline underline-offset-2 hover:no-underline ${accentTextClass}`}
                    >
                      Open it in a new tab
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* Additional Information */}
              <section>
                <div className={`rounded-2xl border p-8 ${cardClass}`}>
                  <h2 className={`font-serif text-2xl font-semibold mb-6 ${primaryTextClass}`}>
                    Venture Inquiries
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className={`font-semibold mb-2 ${primaryTextClass}`}>InnovateHub</h3>
                      <p className={`text-sm ${secondaryTextClass}`}>
                        Product strategy, execution support, and innovation consulting for founders 
                        building enduring ventures.
                      </p>
                    </div>

                    <div>
                      <h3 className={`font-semibold mb-2 ${primaryTextClass}`}>Alomarada</h3>
                      <p className={`text-sm ${secondaryTextClass}`}>
                        Investor advisory and mentoring for African-diaspora entrepreneurs 
                        developing African markets.
                      </p>
                    </div>

                    <div>
                      <h3 className={`font-semibold mb-2 ${primaryTextClass}`}>Endureluxe</h3>
                      <p className={`text-sm ${secondaryTextClass}`}>
                        Premium sustainable fitness partnerships and community-driven wellness 
                        experiences.
                      </p>
                    </div>

                    <div className={`pt-4 border-t ${isDark ? "border-white/10" : "border-lightGrey"}`}>
                      <h3 className={`font-semibold mb-3 ${primaryTextClass}`}>Response Time</h3>
                      <p className={`text-sm ${secondaryTextClass}`}>
                        We carefully review each inquiry and aim to respond within 2–3 business days. 
                        For urgent matters, please include &ldquo;URGENT&rdquo; in your subject line.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Enhanced Footer Navigation */}
            <section className={`mt-16 border-t pt-8 ${isDark ? "border-white/10" : "border-lightGrey"}`}>
              <nav className="flex flex-wrap justify-center gap-6 text-sm">
                <Link 
                  href="/" 
                  className={`hover:underline ${secondaryTextClass} hover:${accentTextClass}`}
                >
                  Home
                </Link>
                <Link 
                  href="/innovatehub" 
                  className={`hover:underline ${secondaryTextClass} hover:${accentTextClass}`}
                >
                  InnovateHub
                </Link>
                <Link 
                  href="/ventures" 
                  className={`hover:underline ${secondaryTextClass} hover:${accentTextClass}`}
                >
                  Ventures
                </Link>
                <Link 
                  href="/books" 
                  className={`hover:underline ${secondaryTextClass} hover:${accentTextClass}`}
                >
                  Books
                </Link>
                <Link 
                  href="/downloads" 
                  className={`hover:underline ${secondaryTextClass} hover:${accentTextClass}`}
                >
                  Downloads
                </Link>
              </nav>
              
              <div className="mt-6 text-center">
                <p className={`text-xs ${isDark ? "text-gray-500" : "text-slate-500"}`}>
                  Part of the Abraham of London ecosystem
                </p>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}