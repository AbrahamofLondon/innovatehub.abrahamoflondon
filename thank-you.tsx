// pages/thank-you.tsx

import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { siteConfig, absUrl } from "@/lib/siteConfig";
// Assuming you use an icon library like 'lucide-react'
import { Check, Mail } from "lucide-react"; 

export default function ThankYouPage() {
  const CANONICAL = absUrl("/thank-you");
  const defaultReplyTime = "within 2 business days"; // Standard professional touch

  return (
    <Layout pageTitle="Message Received">
      <Head>
        <title>Message Received | {siteConfig.author}</title>
        <meta name="description" content="Your message has been received by Abraham of London and we will reply soon." />
        {/* Important for thank-you pages to prevent duplicate indexing */}
        <meta name="robots" content="noindex, follow" /> 
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Message Received | Abraham of London" />
        <meta property="og:description" content="We’ve received your message and will reply soon." />
        <meta property="og:url" content={CANONICAL} />
      </Head>

      <section className="container mx-auto max-w-3xl px-4 py-20">
        <div className="rounded-3xl bg-white ring-1 ring-gray-100 shadow-2xl p-10 md:p-16 text-center transition-all duration-300">
          
          {/* Premium Touch: Icon/Visual */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest mb-4">
             <Check className="h-8 w-8 text-cream" aria-hidden="true" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-forest tracking-tight">
            Thank You, Your Message Is Received
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
            We appreciate you reaching out. We will review your inquiry and aim to get back to you 
            **{defaultReplyTime}**.
          </p>
          
          <p className="mt-2 text-base text-gray-500 flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            For any urgent queries, you can reach us directly at:
            <a className="underline font-medium text-forest hover:text-green-800" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary Button: Clear, Strong, Hover Effect */}
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 font-bold text-cream transition-all duration-200 hover:bg-green-800 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
            
            {/* Secondary Button: Ghost Style with Hover Effect */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 font-bold text-gray-800 transition-all duration-200 hover:bg-gray-50 hover:shadow-md"
            >
              Send another message
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}