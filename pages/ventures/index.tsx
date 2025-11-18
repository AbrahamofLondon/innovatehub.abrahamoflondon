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
  Globe2,
  BookOpen,
  Download,
} from "lucide-react";

import Layout from "@/components/Layout";
import { routes } from "@/lib/siteConfig";

type VentureStatus = "Active" | "In development";

interface Venture {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  status: VentureStatus;
  focus: string;
  externalLabel?: string;
  tagline?: string;
  isExternal?: boolean;
}

const ventures: Venture[] = [
  {
    name: "Abraham of London",
    description:
      "The narrative headquarters: story, philosophy, and the lens through which all ventures are built.",
    icon: Users,
    href: routes.home,
    isExternal: false,
    status: "Active",
    focus: "Thought leadership, fatherhood, strategy, and legacy content.",
    externalLabel: "Go to main platform",
    tagline: "Where the worldview and voice are forged.",
  },
  {
    name: "Alomarada",
    description:
      "Strategy and market-entry advisory for institutions operating in complex and emerging markets.",
    icon: Building2,
    href: "https://alomarada.com",
    isExternal: true,
    status: "Active",
    focus:
      "Institutional advisory, market-entry strategy, and deal architecture.",
    externalLabel: "Open Alomarada site",
    tagline: "Turning context and constraints into strategic leverage.",
  },
  {
    name: "InnovateHub",
    description:
      "A build-space for serious founders and leaders who want clear thinking, disciplined execution, and integrity at the core of what they build.",
    icon: Lightbulb,
    href: "https://innovatehub.abrahamoflondon.org/about",
    isExternal: true,
    status: "Active",
    focus: "Venture design, strategic clarity, and execution systems.",
    externalLabel: "Explore InnovateHub",
    tagline: "Where serious ideas mature into enduring ventures.",
  },
  {
    name: "Endureluxe",
    description:
      "A community-driven fitness and lifestyle venture uniting everyday athletes, founders, and professionals around disciplined training, sustainable health, and gear that can keep up.",
    icon: PackageCheck,
    href: "https://alomarada.com/endureluxe",
    isExternal: true,
    status: "In development",
    focus:
      "Community-led training, challenges, and durable performance gear for people who train, build, and endure together.",
    externalLabel: "Explore Endureluxe",
    tagline: "Community-driven fitness transformation.",
  },
];

const statusOrder: VentureStatus[] = ["Active", "In development"];

const VenturesPage: NextPage = () => {
  const pageTitle = "Ventures";

  return (
    <Layout title={pageTitle}>
      <Head>
        <title>{`Ventures | Abraham of London`}</title>
        <meta
          name="description"
          content="A focused portfolio of ventures built around one core mandate: principled innovation that outlives the news cycle."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <header className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400 mb-3">
              Ecosystem Overview
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              One vision, multiple expressions.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl">
              Each venture is a different instrument in the same orchestra—aligned by a single mandate:
              build work that carries weight, respects people, and can survive pressure.
            </p>
          </header>

          {/* Quick legend / framing strip */}
          <section className="mb-10">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 flex gap-3">
                <Target className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
                    How to read this page
                  </h2>
                  <p className="text-slate-300">
                    This is not a random portfolio. It’s a structured ecosystem: narrative, strategy, build, and proof.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 flex gap-3">
                <TrendingUp className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
                    Status signals
                  </h2>
                  <p className="text-slate-300">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-300 mr-1">
                      Active
                    </span>
                    is live and operational.
                    <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-300 ml-2 mr-1">
                      In development
                    </span>
                    is being quietly built or refined.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 flex gap-3">
                <Globe2 className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
                    Where to start
                  </h2>
                  <p className="text-slate-300">
                    Start with{" "}
                    <span className="font-semibold text-slate-100">Abraham of London</span> for the worldview,
                    then step into <span className="font-semibold text-slate-100">InnovateHub</span> if you&apos;re actively building.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ventures grouped by status */}
          {statusOrder.map((status) => {
            const group = ventures.filter((v) => v.status === status);
            if (group.length === 0) return null;

            return (
              <section key={status} className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-50 flex items-center gap-2">
                    {status === "Active" ? "Active ventures" : "In development"}
                  </h2>
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${
                      status === "Active"
                        ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-200"
                        : "border-amber-400/60 bg-amber-500/10 text-amber-200"
                    }`}
                  >
                    {group.length} {group.length === 1 ? "venture" : "ventures"}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {group.map((venture) => {
                    const isExternal =
                      venture.isExternal ?? venture.href.startsWith("http");

                    return (
                      <article
                        key={venture.name}
                        className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-7 shadow-sm hover:shadow-xl hover:border-blue-500/70 transition-all"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700">
                            <venture.icon className="h-5 w-5 text-blue-300" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                                {venture.name}
                              </h3>
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${
                                  venture.status === "Active"
                                    ? "bg-emerald-500/10 text-emerald-200 border border-emerald-500/40"
                                    : "bg-amber-500/10 text-amber-200 border border-amber-500/40"
                                }`}
                              >
                                {venture.status}
                              </span>
                            </div>
                            {venture.tagline && (
                              <p className="text-xs uppercase tracking-[0.18em] text-blue-300">
                                {venture.tagline}
                              </p>
                            )}
                          </div>
                        </div>

                        <p className="text-sm md:text-base text-slate-300 mb-3">
                          {venture.description}
                        </p>
                        <p className="text-xs md:text-sm text-slate-400 mb-4">
                          <span className="font-semibold text-slate-200">
                            Focus:&nbsp;
                          </span>
                          {venture.focus}
                        </p>

                        <div className="flex items-center justify-between gap-3">
                          <Link
                            href={venture.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition group"
                          >
                            {venture.externalLabel ?? "Open venture"}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                          <div className="text-[11px] text-slate-500 text-right">
                            <p>
                              Built under the{" "}
                              <span className="font-semibold text-slate-300">
                                Abraham of London
                              </span>{" "}
                              mandate.
                            </p>
                            <p>One vision, expressed through multiple engines.</p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* Cross-venture CTAs: Blog + Downloads (internal) */}
          <section className="mt-10 mb-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-7 md:p-8 text-center">
            <h2 className="text-lg md:text-xl font-semibold text-slate-50 mb-3">
              Want to explore the thinking and tools behind these ventures?
            </h2>
            <p className="text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto">
              Two of the most practical ways to engage the ecosystem right now are through the{" "}
              <span className="font-semibold text-slate-100">Blog</span> and the{" "}
              <span className="font-semibold text-slate-100">Downloads</span> library.
              Both are live, maintained, and built to be used—not admired.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href={routes.blog}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-xs md:text-sm font-semibold text-slate-900 shadow hover:bg-white transition"
              >
                <BookOpen className="h-4 w-4" />
                Visit the Blog
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={routes.downloads}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow hover:bg-blue-500 transition"
              >
                <Download className="h-4 w-4" />
                Open Downloads &amp; Playbooks
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default VenturesPage;