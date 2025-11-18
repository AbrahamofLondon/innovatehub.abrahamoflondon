// pages/innovatehub/about.tsx
import * as React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { getPageTitle } from "@/lib/siteConfig";
import { Moon, SunMedium } from "lucide-react";

const InnovateHubAboutPage = (): JSX.Element => {
  const pageTitle = "About InnovateHub";
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

  const accentBorderClass = isDark ? "border-blue-500" : "border-blue-500";
  const primaryTextClass = isDark ? "text-slate-100" : "text-slate-900";
  const secondaryTextClass = isDark ? "text-slate-300" : "text-slate-700";
  const accentTextClass = isDark ? "text-blue-400" : "text-blue-600";

  return (
    <Layout title={pageTitle}>
      <Head>
        <title>{getPageTitle(pageTitle)}</title>
        <meta
          name="description"
          content="InnovateHub transforms promising ideas into enduring ventures. We provide the strategic clarity and disciplined execution that turns vision into viable, lasting impact."
        />
        <meta name="theme-color" content={isDark ? "#0f172a" : "#f7f5ee"} />
      </Head>

      <div className={shellClass}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Header with theme toggle */}
          <div className="flex items-start justify-between gap-4 mb-12">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentTextClass}`}>
                Strategic Innovation
              </p>
            </div>

            {/* Theme Toggle */}
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

          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className={`font-serif text-4xl md:text-5xl font-bold mb-6 ${primaryTextClass}`}>
              Where Ideas Mature Into Enduring Ventures
            </h1>
            <p className={`text-xl leading-relaxed ${secondaryTextClass}`}>
              InnovateHub is where promising concepts evolve beyond pitch decks into durable products, 
              viable services, and systems built to withstand real-world pressures.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            {/* The Problem Section */}
            <section className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${primaryTextClass}`}>The Real Obstacle to Innovation</h2>
              <p className={`text-lg mb-6 ${secondaryTextClass}`}>
                Most ventures don't fail due to lack of effort or intelligence. They collapse under systems that prioritize:
              </p>
              <ul className={`list-disc list-inside space-y-2 mb-6 ${secondaryTextClass}`}>
                <li>Short-term metrics over sustainable growth</li>
                <li>Theoretical advice from those who've never borne real risk</li>
                <li>Superficial engagement that rewards visibility over substance</li>
                <li>Cultures that celebrate exhaustion without teaching endurance</li>
              </ul>
              <p className={`text-lg ${secondaryTextClass}`}>
                We've witnessed this pattern across contexts—from Nigerian boardrooms where potential was stifled by corruption, 
                to UK investment circles where compelling narratives never materialized into backing, 
                to purpose-driven communities that championed vision without building the necessary infrastructure.
              </p>
              <p className={`text-lg font-semibold mt-6 ${accentTextClass}`}>
                InnovateHub exists as a counterpoint—a space where conviction, capability, and character converge.
              </p>
            </section>

            {/* Origin Story */}
            <section className={`mb-16 rounded-2xl p-8 shadow-sm border ${cardClass}`}>
              <h2 className={`text-3xl font-bold mb-6 ${primaryTextClass}`}>Our Genesis: A Response to Systemic Failure</h2>
              <p className={`text-lg mb-4 ${secondaryTextClass}`}>
                Before this platform had a name, it was forged through years of observing systemic gaps:
              </p>
              <ul className={`list-disc list-inside space-y-2 mb-6 ${secondaryTextClass}`}>
                <li>Attempting serious ventures in environments that rewarded shortcuts</li>
                <li>Sacrificing opportunities by refusing to compromise ethical standards</li>
                <li>Watching exceptional talent disappear due to lack of principled support</li>
              </ul>
              <p className={`text-lg mb-4 ${secondaryTextClass}`}>
                Eventually, the choice became clear: adapt to the existing broken system or build a better alternative.
              </p>
              <p className={`text-lg font-semibold ${accentTextClass}`}>
                InnovateHub represents our commitment to the latter path.
              </p>
            </section>

            {/* What We Do */}
            <section className="mb-16">
              <h2 className={`text-3xl font-bold mb-8 ${primaryTextClass}`}>Our Approach: Three Pillars of Transformation</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className={`rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow ${cardClass}`}>
                  <h3 className={`text-xl font-bold mb-4 ${primaryTextClass}`}>Strategic Clarity</h3>
                  <p className={`mb-4 ${secondaryTextClass}`}>
                    We guide you through the foundational questions that separate enduring ventures from temporary experiments:
                  </p>
                  <ul className={`list-disc list-inside space-y-1 text-sm ${secondaryTextClass}`}>
                    <li>Who truly benefits from this solution?</li>
                    <li>What core problem are we actually addressing?</li>
                    <li>Do the economics work beyond theoretical models?</li>
                    <li>How does this scale sustainably over decades?</li>
                  </ul>
                  <p className={`text-sm mt-4 font-semibold ${accentTextClass}`}>
                    Substance over spectacle. Precision over platitudes.
                  </p>
                </div>

                <div className={`rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow ${cardClass}`}>
                  <h3 className={`text-xl font-bold mb-4 ${primaryTextClass}`}>Disciplined Execution</h3>
                  <p className={`mb-4 ${secondaryTextClass}`}>
                    While inspiration provides the spark, discipline builds the fire. We focus on:
                  </p>
                  <ul className={`list-disc list-inside space-y-1 text-sm ${secondaryTextClass}`}>
                    <li>Actionable roadmaps with measurable milestones</li>
                    <li>Operating rhythms that outlast fleeting motivation</li>
                    <li>Progress within constraints, not perfection in theory</li>
                  </ul>
                  <p className={`text-sm mt-4 font-semibold ${accentTextClass}`}>
                    We measure progress in shipped value, not accumulated plans.
                  </p>
                </div>

                <div className={`rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow ${cardClass}`}>
                  <h3 className={`text-xl font-bold mb-4 ${primaryTextClass}`}>Ethical Foundation</h3>
                  <p className={`mb-4 ${secondaryTextClass}`}>
                    While faith informs our principles, integrity defines our practice. This manifests as:
                  </p>
                  <ul className={`list-disc list-inside space-y-1 text-sm ${secondaryTextClass}`}>
                    <li>Transparent processes without hidden agendas</li>
                    <li>Growth through value creation, not exploitation</li>
                    <li>Solutions that respect all stakeholders</li>
                  </ul>
                  <p className={`text-sm mt-4 font-semibold ${accentTextClass}`}>
                    True innovation elevates people; it never compromises their dignity.
                  </p>
                </div>
              </div>
            </section>

            {/* Target Audience */}
            <section className={`mb-16 rounded-2xl p-8 ${isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-900 text-white'}`}>
              <h2 className="text-3xl font-bold text-white mb-6">Our Community: Builders Who Value Substance</h2>
              <p className="text-lg mb-6">
                This space serves those who:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Seek alignment between their professed values and daily practice</li>
                <li>Possess experience but require sharper strategic frameworks</li>
                <li>Refuse to sacrifice integrity for apparent expediency</li>
                <li>Operate in challenging contexts and need practical, not theoretical, support</li>
              </ul>
              <div className={`rounded-lg p-4 mt-6 ${isDark ? 'bg-amber-900/30 border-amber-700' : 'bg-amber-50 border-amber-200'}`}>
                <p className={`font-semibold ${isDark ? 'text-amber-200' : 'text-amber-800'}`}>
                  If you're seeking shortcuts, superficial validation, or success without substance, we cannot help you.
                </p>
                <p className={`mt-2 ${isDark ? 'text-amber-200' : 'text-amber-800'}`}>
                  If you're committed to building with intention, integrity, and long-term perspective, you've found your people.
                </p>
              </div>
            </section>

            {/* Operating Principles */}
            <section className="mb-16">
              <h2 className={`text-3xl font-bold mb-8 ${primaryTextClass}`}>Our Guiding Principles</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Truth Before Tactics",
                    description: "We address foundational issues before pursuing scale. Confusion cannot be optimized—only clarified."
                  },
                  {
                    title: "Reality-Based Design",
                    description: "We build for actual market conditions, human limitations, and inevitable challenges—not ideal scenarios."
                  },
                  {
                    title: "Data-Informed Wisdom",
                    description: "While we respect quantitative insights, we balance them with qualitative discernment and experience."
                  },
                  {
                    title: "Purposeful Adversity",
                    description: "We help transform past challenges into competitive advantages and sources of resilience."
                  },
                  {
                    title: "Legacy Mindset",
                    description: "We prioritize sustainable impact that compounds over time above temporary visibility or viral moments."
                  }
                ].map((principle, index) => (
                  <div key={index} className={`border-l-4 pl-6 py-2 rounded-r-lg transition-colors ${accentBorderClass} ${isDark ? 'hover:bg-slate-800/50' : 'hover:bg-blue-50'}`}>
                    <h3 className={`text-xl font-bold mb-2 ${primaryTextClass}`}>{principle.title}</h3>
                    <p className={secondaryTextClass}>{principle.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ecosystem Context */}
            <section className={`mb-16 rounded-2xl p-8 ${isDark ? 'bg-slate-800/50' : 'bg-blue-50'}`}>
              <h2 className={`text-3xl font-bold mb-6 ${primaryTextClass}`}>Our Place in the Broader Ecosystem</h2>
              <p className={`text-lg mb-6 ${secondaryTextClass}`}>
                InnovateHub functions as a vital component within a cohesive framework dedicated to principled impact:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className={`rounded-lg p-6 hover:shadow-md transition-shadow ${cardClass}`}>
                  <h3 className={`font-bold mb-2 ${primaryTextClass}`}>Abraham of London</h3>
                  <p className={`text-sm ${secondaryTextClass}`}>The philosophical foundation and narrative framework.</p>
                </div>
                <div className={`rounded-lg p-6 hover:shadow-md transition-shadow ${cardClass}`}>
                  <h3 className={`font-bold mb-2 ${primaryTextClass}`}>Alomarada</h3>
                  <p className={`text-sm ${secondaryTextClass}`}>Strategic advisory and market-entry expertise for institutional impact.</p>
                </div>
                <div className={`rounded-lg p-6 border-2 hover:shadow-md transition-shadow ${accentBorderClass} ${cardClass}`}>
                  <h3 className={`font-bold mb-2 ${primaryTextClass}`}>InnovateHub</h3>
                  <p className={`text-sm ${secondaryTextClass}`}>The practical engine where ideas are tested, refined, and brought to life.</p>
                </div>
                <div className={`rounded-lg p-6 hover:shadow-md transition-shadow ${cardClass}`}>
                  <h3 className={`font-bold mb-2 ${primaryTextClass}`}>Endureluxe</h3>
                  <p className={`text-sm ${secondaryTextClass}`}>The embodiment of sustainable performance and enduring quality.</p>
                </div>
              </div>
              <p className={`text-lg font-semibold text-center ${accentTextClass}`}>
                Together, we support principled builders in creating work that outlives them.
              </p>
            </section>

            {/* Final CTA */}
            <section className={`text-center rounded-2xl p-12 ${isDark ? 'bg-gradient-to-r from-slate-800 to-blue-900' : 'bg-gradient-to-r from-slate-900 to-blue-900'} text-white`}>
              <h2 className="text-3xl font-bold text-white mb-6">Join Us in Building What Matters</h2>
              <p className="text-lg text-slate-200 mb-6">
                Your presence here suggests you're carrying something meaningful—a concept you've nurtured, 
                a solution that addresses a genuine need, a vision that persists despite obstacles.
              </p>
              <p className="text-lg text-slate-200 mb-8">
                We don't offer rescue or easy answers. We provide honest perspective, strategic clarity, 
                practical tools, and committed partnership as you transform your vision into enduring impact.
              </p>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 inline-block rounded-xl px-8 py-4 shadow-2xl">
                <p className="text-white font-bold text-xl">
                  Welcome to InnovateHub—where innovation develops substance, not just visibility.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InnovateHubAboutPage;