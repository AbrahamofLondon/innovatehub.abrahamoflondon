// pages/thank-you.tsx

import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { siteConfig, absUrl, getPageTitle } from "@/lib/siteConfig";
import { Check, Mail, ArrowLeft, MessageCircle } from "lucide-react"; 

export default function ThankYouPage() {
  const CANONICAL = absUrl("/thank-you");
  const pageTitle = "Message Received";
  const defaultReplyTime = "within 2 business days";

  return (
    <Layout title={pageTitle}>
      <Head>
        <title>{getPageTitle(pageTitle)}</title>
        <meta 
          name="description" 
          content={`Your message has been received by ${siteConfig.author}. We appreciate your inquiry and will respond ${defaultReplyTime}.`} 
        />
        {/* Important for thank-you pages to prevent duplicate indexing */}
        <meta name="robots" content="noindex, follow" /> 
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content={getPageTitle(pageTitle)} />
        <meta property="og:description" content={`We've received your message and will reply ${defaultReplyTime}.`} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
      </Head>

      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-warmWhite via-cream to-white px-4 py-16">
        <div className="container mx-auto max-w-2xl">
          <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-2xl shadow-forest/10 p-8 md:p-12 text-center transition-all duration-500 hover:shadow-3xl hover:shadow-forest/15">
            
            {/* Premium Visual Feedback */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-forest to-green-800 mb-6 shadow-lg">
              <Check className="h-10 w-10 text-cream" aria-hidden="true" strokeWidth={3} />
            </div>
            
            {/* Animated Checkmark Effect */}
            <div className="absolute -top-4 -right-4 h-8 w-8 bg-forest rounded-full animate-ping opacity-75"></div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-deepCharcoal tracking-tight mb-4">
              Message Received
            </h1>
            
            <p className="text-xl text-slate-700 leading-relaxed max-w-xl mx-auto mb-6">
              Thank you for reaching out. We appreciate your inquiry and will review it carefully.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                  <ul className="text-blue-800 space-y-1.5 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                      We'll review your message and assess how we can best assist you
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                      Our team will get back to you <strong>{defaultReplyTime}</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                      We'll provide clear next steps and relevant information
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-warmWhite rounded-2xl p-6 mb-8 border border-amber-100">
              <p className="text-base text-slate-600 flex flex-col sm:flex-row items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-forest flex-shrink-0" />
                <span>For urgent matters, contact us directly at:</span>
                <a 
                  className="font-semibold text-forest hover:text-green-800 transition-colors underline decoration-2 decoration-forest/30 underline-offset-4"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Primary Button */}
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-forest to-green-800 px-8 py-4 font-bold text-cream transition-all duration-300 hover:from-green-800 hover:to-forest hover:shadow-2xl hover:shadow-forest/25 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-forest/20"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Link>
              
              {/* Secondary Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-gray-300 bg-transparent px-8 py-4 font-bold text-deepCharcoal transition-all duration-300 hover:border-forest hover:bg-forest/5 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-forest/10"
              >
                <MessageCircle className="h-5 w-5" />
                Send Another Message
              </Link>
            </div>

            {/* Additional Reassurance */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                We value your time and look forward to connecting with you soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}