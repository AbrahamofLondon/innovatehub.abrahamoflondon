// pages/innovatehub/about.tsx
import * as React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { getPageTitle } from "@/lib/siteConfig";

const InnovateHubAboutPage = (): JSX.Element => {
  const pageTitle = "About InnovateHub";

  return (
    <Layout title={pageTitle}>
      <Head>
        <title>{getPageTitle(pageTitle)}</title>
        <meta
          name="description"
          content="InnovateHub is where ideas grow up. We help builders test, refine, and ship durable products, viable services, and systems that can survive real life."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About InnovateHub
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              InnovateHub is where ideas grow up. Not into pitch decks. Into durable products, 
              viable services, and systems that can survive real life.
            </p>
          </header>

          <div className="prose prose-lg prose-slate max-w-none">
            
            {/* The Problem Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The problem we're actually solving</h2>
              <p className="text-lg text-slate-700 mb-6">
                Most founders don't fail because they're lazy or stupid. They fail because the game around them is rigged by:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
                <li>Short-term hype and vanity metrics</li>
                <li>Advisors who've never carried real risk</li>
                <li>Systems that reward noise, not substance</li>
                <li>Cultures that romanticise "the grind" but never teach discipline</li>
              </ul>
              <p className="text-lg text-slate-700">
                I've watched this play out across Nigerian boardrooms where corruption quietly strangled viable projects, 
                UK conversations where investors "love the story" but never follow through, and faith spaces where people 
                talk about purpose but never build infrastructure.
              </p>
              <p className="text-lg text-slate-700 font-semibold mt-6">
                InnovateHub is my rebuttal to that. A place where conviction, competence, and character sit at the same table.
              </p>
            </section>

            {/* Origin Story */}
            <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">How InnovateHub was born</h2>
              <p className="text-lg text-slate-700 mb-4">
                Before there was a logo, there were years of hard lessons:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
                <li>Trying to build serious ventures in environments addicted to shortcuts</li>
                <li>Losing time, money, and opportunities because I refused to play dirty</li>
                <li>Watching people with real potential disappear because no one would back them properly</li>
              </ul>
              <p className="text-lg text-slate-700 mb-4">
                At some point, you either adapt to the broken system, or start building a different one.
              </p>
              <p className="text-lg text-slate-700 font-semibold">
                InnovateHub is that second option.
              </p>
            </section>

            {/* What We Do */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What InnovateHub actually does</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">1. Strategic clarity</h3>
                  <p className="text-slate-700 mb-4">
                    We help you answer the boring but essential questions most people skip:
                  </p>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                    <li>Who is this really for?</li>
                    <li>What problem does it truly solve?</li>
                    <li>Does the unit economics make sense outside a Notion doc?</li>
                    <li>What would this look like if it had to last 10–20 years?</li>
                  </ul>
                  <p className="text-slate-600 text-sm mt-4 font-semibold">
                    No fluff. No theatre. Just clarity.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">2. Durable execution</h3>
                  <p className="text-slate-700 mb-4">
                    Ideas are cheap. Discipline is expensive. InnovateHub focuses on:
                  </p>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                    <li>Simple, testable roadmaps</li>
                    <li>Habits and operating rhythms that keep you moving</li>
                    <li>Building with constraints instead of waiting for perfect conditions</li>
                  </ul>
                  <p className="text-slate-600 text-sm mt-4 font-semibold">
                    We are here to help you ship, review, refine, and ship again.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">3. Ethical foundations</h3>
                  <p className="text-slate-700 mb-4">
                    You don't have to share my faith to work with InnovateHub. But you will feel its impact:
                  </p>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                    <li>No manipulation or "get rich quick" schemes</li>
                    <li>No dishonest leverage</li>
                    <li>Nothing that requires lying to customers, team, or yourself</li>
                  </ul>
                  <p className="text-slate-600 text-sm mt-4 font-semibold">
                    Innovation that corrupts people isn't innovation.
                  </p>
                </div>
              </div>
            </section>

            {/* Target Audience */}
            <section className="mb-16 bg-slate-900 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold text-white mb-6">Who InnovateHub is for</h2>
              <p className="text-lg text-slate-200 mb-6">
                We built this for people who:
              </p>
              <ul className="list-disc list-inside text-slate-200 space-y-2 mb-6">
                <li>Are tired of preaching "purpose" but living in chaos</li>
                <li>Have real experience but need sharper strategy and cleaner structure</li>
                <li>Refuse to compromise their ethics just to "make it"</li>
                <li>Are building in hard contexts and need pragmatic, not theoretical, support</li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                <p className="text-amber-800 font-semibold">
                  If you want shortcuts, easy money, or branding with no backbone, we're not for you.
                </p>
                <p className="text-amber-800 mt-2">
                  If you want to build slowly, strategically, and with integrity, you're in the right place.
                </p>
              </div>
            </section>

            {/* Operating Principles */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Our operating principles</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Truth before tactics",
                    description: "We don't scale confusion. We stop and fix the foundations first."
                  },
                  {
                    title: "Design for reality, not conference slides",
                    description: "What you build must survive bad months, difficult markets, and human weakness."
                  },
                  {
                    title: "Data plus discernment",
                    description: "We use numbers, but we don't worship them. Wisdom still matters."
                  },
                  {
                    title: "No wasted suffering",
                    description: "The pain you've already been through should become a competitive advantage, not just a sad story."
                  },
                  {
                    title: "Legacy over noise",
                    description: "We'd rather help you build quietly for 10 years than go viral for 10 minutes."
                  }
                ].map((principle, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{principle.title}</h3>
                    <p className="text-slate-700">{principle.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ecosystem Context */}
            <section className="mb-16 bg-blue-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">How InnovateHub fits into the bigger picture</h2>
              <p className="text-lg text-slate-700 mb-6">
                InnovateHub is not a random side project. It's a working engine inside a broader architecture:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Abraham of London</h3>
                  <p className="text-slate-700 text-sm">The narrative, the convictions, the lens.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Alomarada</h3>
                  <p className="text-slate-700 text-sm">The advisory, governance, and systems thinking.</p>
                </div>
                <div className="bg-white rounded-lg p-6 border-2 border-blue-500">
                  <h3 className="font-bold text-slate-900 mb-2">InnovateHub</h3>
                  <p className="text-slate-700 text-sm">The lab where builders get to test, refine, and execute.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Endureluxe</h3>
                  <p className="text-slate-700 text-sm">The lifestyle and durability reminder.</p>
                </div>
              </div>
              <p className="text-lg text-slate-700 font-semibold mt-6 text-center">
                Together, this ecosystem is about one thing: Helping principled people build things that outlast them.
              </p>
            </section>

            {/* Final CTA */}
            <section className="text-center bg-slate-900 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold text-white mb-6">The invitation</h2>
              <p className="text-lg text-slate-200 mb-6">
                If you're here, you're probably already carrying something: A product idea you've been circling for years, 
                a service you know could work with better structure, a vision that refuses to die.
              </p>
              <p className="text-lg text-slate-200 mb-8">
                InnovateHub won't "save" you. That's not our language. What we will do is challenge your assumptions, 
                help you see the board more clearly, give you tools and honest feedback, and walk with you as you move 
                from idea to enduring work.
              </p>
              <div className="bg-blue-500 inline-block rounded-lg px-8 py-4">
                <p className="text-white font-bold text-xl">
                  Welcome to InnovateHub. Where innovation grows a backbone, not just a brand.
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