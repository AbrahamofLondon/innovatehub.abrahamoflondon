// components/BrandCard.tsx

import Link from "next/link";
import { Venture } from "@/lib/siteConfig";

export function BrandCard({ initials, title, description, href, cta, muted }: Venture) {
  const isExternal = href.startsWith("http");
  return (
    <article
      // Use md:grid for a side-by-side layout on medium screens and up
      className={`
        relative rounded-2xl border bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl
        md:grid md:grid-cols-[64px_1fr] md:gap-5
        ${muted ? "opacity-75" : "hover:scale-[1.01]"}
      `}
    >
      {/* Logo/Initials Container */}
      <div
        className={`
          flex h-16 w-16 items-center justify-center rounded-xl 
          bg-gradient-to-br from-forest to-green-800 font-extrabold tracking-wide text-white text-lg
          ${muted ? "opacity-75" : ""}
        `}
      >
        {initials}
      </div>

      {/* Content */}
      <div className="mt-4 md:mt-0">
        <h3 className="font-serif text-xl font-bold text-forest">{title}</h3>
        <p className="mt-1 text-base text-gray-700">{description}</p>
        <Link
          href={href}
          // Added margin top and strong hover effects
          className={`
            mt-3 inline-block text-base font-bold text-forest underline transition hover:text-green-800
            ${muted ? "pointer-events-none opacity-50" : ""}
          `}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}