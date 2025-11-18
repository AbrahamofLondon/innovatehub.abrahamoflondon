// pages/innovatehub/about.tsx
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { getPageTitle } from "@/lib/siteConfig";
import { Moon, SunMedium, ChevronDown, ChevronUp } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Truth Before Tactics",
    description: "We fix fundamentals before we chase scale. Confusion can’t be optimised."
  },
  {
    title: "Reality-Based Design",
    description: "We build for real markets, real people, and real constraints—not pitch-deck fantasies."
  },
  {
    title: "Data-Informed Wisdom",
    description: "We respect numbers, but we refuse to outsource judgement to them."
  },
  {
    title: "Purposeful Adversity",
    description: "We turn your scars into strategy—experience becomes a competitive advantage."
  },
  {
    title: "Legacy Mindset",
    description: "We optimise for work that outlives you, not for a news cycle."
  }
];

const InnovateHubAboutPage = (): JSX.Element => {
  const pageTitle = "About InnovateHub";
  const [isDark, setIsDark] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);
  const [showOrigin, setShowOrigin] = React.useState(false);

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
      <Layout title={pageTitle}>
        <div className="min-h-screen bg-gray-100" />
      </Layout>
    );
  }

  // Theme classes
  const shellClass = isDark
    ? "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-slate-100"
    : "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900";

  const cardClass = isDark
    ? "bg-slate-800/80 backdrop-blur-sm border-slate-700 text-slate-200 shadow-xl"
    : "bg-white border-slate-200 text-slate-700 shadow-sm";

  const accentBorderClass = "border-blue-500";
  const primaryTextClass = isDark ? "text-slate-100" : "text-slate-900";
  const secondaryTextClass = isDark ? "text-slate-300" : "text-slate-700";
  const accentTextClass = isDark ? "text-blue-400" : "text-blue-600";

  return (
    <Layout title={pageTitle}>
      <Head>
        <title>{getPageTitle(pageTitle)}</title>
        <meta
          name="description"
          content="InnovateHub transforms serious ideas into enduring ventures with strategic clarity, disciplined execution, and principled support."
        />
        <meta name="theme-color" content={isDark ? "#0f172a" : "#f7f5ee"} />
      </Head>

      <div className={shellClass}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header with theme toggle */}
          <div className="flex items-start justify-between gap-4 mb-10">
            <p className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] ${accentTextClass}`}>
              Strategic Innovation • Principled Execution
            </p>

            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-sm transition-all ${
                isDark
                  ? "border-slate-600 bg-slate-700/50 text-slate-200 hover:bg-slate-700/70"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
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

          {/* Hero */}
          <header className="mb-10">
            <h1 className={`font-serif text-4xl md:text-5xl font-bold mb-4 ${primaryTextClass}`}>
              Where serious ideas mature into enduring ventures.
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl ${secondaryTextClass}`}>
              InnovateHub is a build-space for founders, leaders, and institutions who want clear thinking,
              disciplined execution, and integrity at the core of what they build.
            </p>
          </header>

          {/* At a glance card */}
          <section className={`mb-12 rounded-2xl border ${cardClass} p-6 md:p-7`}>
            <div className="grid md:grid-cols-3 gap-6 items-start text-sm md:text-base">
              <div>
                <h3 className={`text-xs font-semibold uppercase tracking-wide mb-2 ${secondaryTextClass}`}>
                  In 15 seconds
                </h3>
                <p className={secondaryTextClass}>
                  We help you turn conviction into a venture that can survive pressure—regulatory, political, or market—
                  without asking you to compromise your values.
                </p>
              </div>
              <div>
                <h3 className={`text-xs font-semibold uppercase tracking-wide mb-2 ${secondaryTextClass}`}>
                  Built for
                </h3>
                <ul className={`space-y-1 ${secondaryTextClass}`}>
                  <li>• Founders in complex markets</li>
                  <li>• Leaders stewarding high-trust brands</li>
                  <li>• Builders tired of hype with no backbone</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-xs font-semibold uppercase tracking-wide mb-2 ${secondaryTextClass}`}>
                  What changes
                </h3>
                <ul className={`space-y-1 ${secondaryTextClass}`}>
                  <li>• Fewer guesses, more clarity</li>
                  <li>• Less noise, tighter execution</li>
                  <li>• Strategy anchored in integrity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Main body */}
          <div className="prose prose-lg max-w-none">
            {/* The Problem */}
            <section className="mb-14" id="problem">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${primaryTextClass}`}>
                The real obstacle to innovation
              </h2>
              <p className={`text-lg mb-4 ${secondaryTextClass}`}>
                Most ventures don’t die for lack of effort. They die under systems that quietly reward the wrong things:
              </p>
              <ul className={`list-disc list-inside space-y-2 mb-4 ${secondaryTextClass}`}>
                <li>Short-term optics instead of durable growth</li>
                <li>Theory from people who never carried real risk</li>
                <li>Visibility over value, noise over substance</li>
                <li>Cultures that glorify burnout but never teach endurance</li>
              </ul>
              <p className={`text-lg ${secondaryTextClass}`}>
                I’ve seen this play out in Nigerian boardrooms distorted by politics, UK investment rooms
                where strong narratives never translated into backing, and purpose-driven spaces with heart
                but no infrastructure.
              </p>
              <p className={`mt-4 text-lg font-semibold ${accentTextClass}`}>
                InnovateHub exists as a counterpoint—a place where conviction, capability, and character are non-negotiable.
              </p>
            </section>

            {/* Origin Story – collapsible */}
            <section className="mb-14">
              <button
                type="button"
                onClick={() => setShowOrigin((v) => !v)}
                className={`w-full flex items-center justify-between rounded-2xl border px-5 py-4 text-left ${cardClass}`}
              >
                <div>
                  <h2 className={`text-xl md:text-2xl font-bold ${primaryTextClass}`}>
                    Founder’s note: why InnovateHub had to exist
                  </h2>
                  <p className={`mt-1 text-sm md:text-base ${secondaryTextClass}`}>
                    Years of watching good people and good ideas get crushed by bad systems forced a decision:
                    adapt to the game—or build a different table.
                  </p>
                </div>
                {showOrigin ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>

              {showOrigin && (
                <div className={`mt-4 rounded-2xl border p-6 md:p-7 ${cardClass}`}>
                  <p className={`text-lg mb-4 ${secondaryTextClass}`}>
                    Before InnovateHub had a name, it was a pattern. Serious ventures trying to grow in
                    environments that rewarded shortcuts. Deals walked away from because the price of entry was
                    moral compromise. Brilliant people burning out or disappearing because they had no principled support.
                  </p>
                  <p className={`text-lg mb-4 ${secondaryTextClass}`}>
                    Eventually, the line became clear: either play along with systems that treat people as expendable,
                    or build an alternative for those who refuse to play that game.
                  </p>
                  <p className={`text-lg font-semibold ${accentTextClass}`}>
                    InnovateHub is that alternative—a working lab for people who still believe integrity and excellence
                    belong in the same sentence.
                  </p>
                </div>
              )}
            </section>

            {/* Our Approach – three pillars */}
            <section className="mb-14" id="approach">
              <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${primaryTextClass}`}>
                How we work with you: three pillars
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* Strategic Clarity */}
                <div className={`rounded-xl p-6 border hover:shadow-md transition-shadow ${cardClass}`}>
                  <h3 className={`text-lg font-bold mb-3 ${primaryTextClass}`}>Strategic clarity</h3>
                  <p className={`mb-3 text-sm ${secondaryTextClass}`}>
                    We strip away fog and ask the questions most people avoid:
                  </p>
                  <ul className={`list-disc list-inside space-y-1 text-xs md:text-sm ${secondaryTextClass}`}>
                    <li>Who genuinely wins if this works?</li>
                    <li>What problem are we *actually* solving?</li>
                    <li>Can the economics survive contact with reality?</li>
                    <li>Does this still make sense 10–20 years out?</li>
                  </ul>
                  <p className={`mt-3 text-xs font-semibold ${accentTextClass}`}>Less theatre. More truth.</p>
                </div>

                {/* Disciplined Execution */}
                <div className={`rounded-xl p-6 border hover:shadow-md transition-shadow ${cardClass}`}>
                  <h3 className={`text-lg font-bold mb-3 ${primaryTextClass}`}>Disciplined execution</h3>
                  <p className={`mb-3 text-sm ${secondaryTextClass}`}>
                    We turn intent into momentum with operating rhythms that survive busy seasons and bad weeks.
                  </p>
                  <ul className={`list-disc list-inside space-y-1 text-xs md:text-sm ${secondaryTextClass}`}>
                    <li>Actionable roadmaps, not abstract decks</li>
                    <li>Clear milestones and honest reviews</li>
                    <li>Progress within constraints, not perfection in theory</li>
                  </ul>
                  <p className={`mt-3 text-xs font-semibold ${accentTextClass}`}>
                    We measure in shipped value, not meetings.
                  </p>
                </div>

                {/* Ethical Foundation */}
                <div className={`rounded-xl p-6 border hover:shadow-md transition-shadow ${cardClass}`}>
                  <h3 className={`text-lg font-bold mb-3 ${primaryTextClass}`}>Ethical foundation</h3>
                  <p className={`mb-3 text-sm ${secondaryTextClass}`}>
                    Our worldview is faith-shaped, but our practice is simple: no hidden games.
                  </p>
                  <ul className={`list-disc list-inside space-y-1 text-xs md:text-sm ${secondaryTextClass}`}>
                    <li>Transparent terms and expectations</li>
                    <li>Value creation over exploitation</li>
                    <li>Respect for every stakeholder at the table</li>
                  </ul>
                  <p className={`mt-3 text-xs font-semibold ${accentTextClass}`}>
                    Real innovation lifts people; it doesn’t use them.
                  </p>
                </div>
              </div>
            </section>

            {/* Who we serve */}
            <section
              className={`mb-14 rounded-2xl p-8 ${
                isDark ? "bg-slate-800 text-slate-200" : "bg-slate-900 text-white"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Who InnovateHub is for</h2>
              <p className="text-lg mb-4">
                This is not a general-purpose accelerator. It’s a working room for people who:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Want their values and their business model to say the same thing</li>
                <li>Have experience, but need sharper strategic scaffolding</li>
                <li>Operate in messy or constrained environments and still want to do work they can respect</li>
                <li>Won’t trade integrity for short-term optics</li>
              </ul>
              <div
                className={`rounded-lg border p-4 mt-4 ${
                  isDark ? "bg-amber-900/30 border-amber-700" : "bg-amber-50 border-amber-200"
                }`}
              >
                <p className={`${isDark ? "text-amber-200" : "text-amber-900"} font-semibold`}>
                  If you’re looking for shortcuts, hype, or polite validation, this probably isn’t your room.
                </p>
                <p className={`mt-1 ${isDark ? "text-amber-200" : "text-amber-900"}`}>
                  If you’re ready to build with intention, integrity, and a long view, you’re in the right place.
                </p>
              </div>
            </section>

            {/* Operating principles */}
            <section className="mb-14" id="principles">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${primaryTextClass}`}>
                The InnovateHub operating code
              </h2>
              <p className={`mb-5 text-lg ${secondaryTextClass}`}>
                These are not slogans. They are the guardrails for how we work with you and how we expect you to build.
              </p>
              <div className="space-y-4">
                {PRINCIPLES.map((p, idx) => (
                  <div
                    key={p.title}
                    className={`border-l-4 pl-5 py-2 rounded-r-lg transition-colors ${accentBorderClass} ${
                      isDark ? "hover:bg-slate-800/50" : "hover:bg-blue-50"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className={`text-xs font-mono ${accentTextClass}`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className={`text-lg font-bold ${primaryTextClass}`}>{p.title}</h3>
                    </div>
                    <p className={`mt-1 ${secondaryTextClass}`}>{p.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ecosystem context */}
            <section
              className={`mb-14 rounded-2xl p-8 ${
                isDark ? "bg-slate-800/50" : "bg-blue-50"
              }`}
            >
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${primaryTextClass}`}>
                Where InnovateHub sits in the wider work
              </h2>
              <p className={`text-lg mb-5 ${secondaryTextClass}`}>
                InnovateHub is one part of a larger architecture designed to turn conviction into long-term impact:
              </p>
              <div className="grid md:grid-cols-4 gap-4 mb-6 text-sm">
                <div className={`rounded-xl p-4 border ${cardClass}`}>
                  <h3 className={`font-semibold mb-1 ${primaryTextClass}`}>Abraham of London</h3>
                  <p className={secondaryTextClass}>The narrative layer: philosophy, story, and lens.</p>
                </div>
                <div className={`rounded-xl p-4 border ${cardClass}`}>
                  <h3 className={`font-semibold mb-1 ${primaryTextClass}`}>Alomarada</h3>
                  <p className={secondaryTextClass}>Strategic advisory and market-entry for institutions.</p>
                </div>
                <div className={`rounded-xl p-4 border-2 ${accentBorderClass} ${cardClass}`}>
                  <h3 className={`font-semibold mb-1 ${primaryTextClass}`}>InnovateHub</h3>
                  <p className={secondaryTextClass}>
                    The build room where ideas are tested, refined, and launched.
                  </p>
                </div>
                <div className={`rounded-xl p-4 border ${cardClass}`}>
                  <h3 className={`font-semibold mb-1 ${primaryTextClass}`}>Endureluxe</h3>
                  <p className={secondaryTextClass}>
                    A proof point: durable, high-performance products in the wild.
                  </p>
                </div>
              </div>
              <p className={`text-center text-sm font-semibold ${accentTextClass}`}>
                Together, they form a pipeline—from idea, to strategy, to build, to embodied reality.
              </p>
            </section>

            {/* Final CTA with Blog + Downloads links */}
            <section
              className={`mb-4 text-center rounded-2xl p-10 ${
                isDark ? "bg-gradient-to-r from-slate-800 to-blue-900" : "bg-gradient-to-r from-slate-900 to-blue-900"
              } text-white`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                If you’re carrying a serious idea, you don’t have to build alone.
              </h2>

              <p className="text-lg mb-3 text-slate-200">
                You might be holding a concept, a product in motion, or a venture that needs a reset.
                Our role is not to rescue you, but to stand alongside you with clear thinking, honest feedback,
                and systems that respect both your vision and your values.
              </p>

              <p className="text-base text-slate-200 mb-6">
                Start by immersing yourself in the way we think, then put that thinking to work with practical tools.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm md:text-base font-semibold tracking-wide uppercase shadow-lg hover:bg-white/15 transition"
                >
                  Read InnovateHub insights
                </Link>

                <Link
                  href="/downloads"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900/80 px-6 py-3 text-sm md:text-base font-semibold tracking-wide uppercase shadow-lg border border-slate-600 hover:bg-slate-900 transition"
                >
                  Download playbooks &amp; tools
                </Link>
              </div>

              <p className="mt-5 text-xs text-slate-300">
                The footer will always show you the full ecosystem. These two are the best entry points if you’re ready to engage.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InnovateHubAboutPage;