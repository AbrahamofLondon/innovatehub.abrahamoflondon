// pages/contact.tsx

import Head from "next/head";
import Link from "next/link"; // Import Link for better navigation, even if used only once

// Assume AOF_URL comes from a siteConfig or similar structure in a real app
const AOF_URL =
  process.env.NEXT_PUBLIC_AOF_URL || "https://abrahamoflondon.org";
  
// Define colors/constants used in the previous Tailwind context
const colorForest = "text-green-950"; // Equivalent to --forest
const colorCream = "bg-cream"; // Equivalent to --cream
const colorInk = "text-gray-900"; // Equivalent to --ink

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — InnovateHub by Abraham of London</title>
        <meta
          name="description"
          content="Contact InnovateHub for product strategy and durable execution. We also handle enquiries for Alomarada (advisory for investors & African-diaspora founders) and Endureluxe (premium, sustainable fitness partnerships)."
        />
        <meta name="theme-color" content="#0b2e1f" />
        {/* Use a relative path or siteConfig for canonical URL in a final project */}
        <link rel="canonical" href="https://innovatehub.abrahamoflondon.org/contact" /> 
      </Head>

      {/* Main container with max-width and padding, replacing .wrap */}
      <main className={`mx-auto max-w-3xl px-4 py-12 md:py-20 ${colorInk}`}> 
        <p className="mb-3 text-sm opacity-85">
          A venture from <a href={AOF_URL} className={`${colorForest} underline hover:no-underline`}>Abraham of London</a>
        </p>

        <header className="pb-8">
          <h1 className={`font-serif text-4xl md:text-5xl font-extrabold leading-tight ${colorForest}`}>
            Contact InnovateHub
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-prose opacity-95">
            Tell us where you are, what you’re building, and what “durable”
            looks like for you. If your note concerns{" "}
            <strong className="text-gray-800">Alomarada</strong> (investor advisory & mentoring African-diaspora
            entrepreneurs) or <strong className="text-gray-800">Endureluxe</strong> (premium, sustainable
            fitness partnerships & community), mention it in the message.
            We typically reply **within 2–3 business days**.
          </p>
        </header>

        {/* Netlify hosted form - Premium touch: refined border/shadow/bg */}
        <iframe
          src="/forms/contact.html"
          title="Contact form"
          // Replacing .iframe styles with Tailwind classes
          className={`
            w-full h-[640px] border border-gray-200 rounded-xl bg-white 
            shadow-xl transition-shadow duration-300 hover:shadow-2xl
          `}
        />

        {/* Fallback link */}
        <p className="mt-4 text-sm opacity-80">
          Trouble seeing the form?{" "}
          <a href="/forms/contact.html" className={`${colorForest} underline hover:no-underline font-medium`}>Open it in a new tab</a>.
        </p>
      </main>
    </>
  );
}