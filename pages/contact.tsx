// pages/contact.tsx

import * as React from "react";
import Head from "next/head";
import Link from "next/link";
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
  return (
    <>
      <Head>
        <title>Contact — InnovateHub by Abraham of London</title>
        <meta
          name="description"
          content="Contact InnovateHub for product strategy and durable execution. We also handle enquiries for Alomarada and Endureluxe within the Abraham of London ecosystem."
        />
        <meta name="theme-color" content="#0b2e1f" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <Layout title="Contact — InnovateHub by Abraham of London">
        <main className="mx-auto max-w-3xl px-4 py-12 text-gray-900 md:py-20">
          <p className="mb-3 text-sm text-gray-700">
            A venture from{" "}
            <a
              href={AOF_URL}
              className="text-forest underline underline-offset-2 hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abraham of London
            </a>
          </p>

          <header className="pb-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-forest/80">
              Contact
            </p>
            <h1 className="mt-2 font-serif text-4xl font-extrabold leading-tight text-forest md:text-5xl">
              Contact InnovateHub
            </h1>
            <p className="mt-4 max-w-prose text-lg text-gray-800 md:text-xl">
              Tell us where you are, what you&apos;re building, and what{" "}
              <span className="border-b border-forest/25 pb-0.5">
                “durable”
              </span>{" "}
              looks like for you. If your note concerns{" "}
              <strong>Alomarada</strong> (investor advisory &amp; mentoring
              African-diaspora entrepreneurs) or{" "}
              <strong>Endureluxe</strong> (premium, sustainable fitness
              partnerships &amp; community), mention it clearly in the message.
              We typically reply within{" "}
              <strong>2–3 business days</strong>.
            </p>
          </header>

          {/* Netlify hosted form */}
          <section aria-label="Contact form">
            <iframe
              src="/forms/contact.html"
              title="Contact form"
              className="h-[640px] w-full rounded-2xl border border-gray-200 bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl"
            />
            <p className="mt-4 text-sm text-gray-700">
              Trouble seeing the form?{" "}
              <a
                href="/forms/contact.html"
                className="font-medium text-forest underline underline-offset-2 hover:no-underline"
              >
                Open it in a new tab
              </a>
              .
            </p>
          </section>

          {/* Light touch footer links for this page */}
          <section className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-700">
            <nav className="flex flex-wrap gap-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/innovatehub" className="hover:underline">
                InnovateHub
              </Link>
              <Link href="/ventures" className="hover:underline">
                Ventures
              </Link>
              <Link href="/books" className="hover:underline">
                Books
              </Link>
              <Link href="/downloads" className="hover:underline">
                Downloads
              </Link>
            </nav>
          </section>
        </main>
      </Layout>
    </>
  );
}