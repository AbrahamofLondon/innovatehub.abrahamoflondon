// components/BrandCard.tsx

import Link from "next/link";
import type React from "react";
import type { Venture } from "@/lib/siteConfig";

const DEFAULT_BRAND_COLOR = "#0b2e1f"; // Primary forest green

export function BrandCard({
  initials,
  title,
  description,
  href,
  cta,
  muted,
  themeColor,
}: Venture) {
  const isExternal = href.startsWith("http");
  const accentColor = themeColor || DEFAULT_BRAND_COLOR;

  const dynamicStyle: React.CSSProperties = {
    // Used by Tailwind arbitrary classes in the card
    // e.g. hover:border-[var(--card-accent-color)]
    ["--card-accent-color" as string]: accentColor,
  };

  return (
    <article
      style={dynamicStyle}
      className={`
        relative rounded-2xl border border-gray-100 bg-white p-6 shadow-xl transition-all duration-300
        md:grid md:grid-cols-[64px_1fr] md:gap-5 group
        ${muted
          ? "opacity-75 cursor-default"
          : "hover:shadow-2xl hover:border-[var(--card-accent-color)] hover:ring-2 hover:ring-[var(--card-accent-color)]/30"}
      `}
    >
      {/* Logo / Initials */}
      <div
        className={`
          flex h-16 w-16 items-center justify-center rounded-xl 
          font-extrabold tracking-wide text-white text-lg
          ${muted ? "opacity-75" : "group-hover:shadow-lg"}
        `}
        style={{ backgroundColor: accentColor }}
      >
        {initials}
      </div>

      {/* Content */}
      <div className="mt-4 md:mt-0">
        <h3
          className="font-serif text-xl font-bold"
          style={{ color: accentColor }}
        >
          {title}
        </h3>
        <p className="mt-1 text-base text-gray-700">{description}</p>

        <Link
          href={href}
          className={`
            mt-3 inline-block text-base font-bold underline transition duration-200
            ${muted
              ? "pointer-events-none opacity-40 text-gray-500"
              : "hover:no-underline hover:brightness-110"}
          `}
          style={{ color: accentColor }}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {cta}
          {isExternal && !muted && (
            <svg
              className="ml-1 -mt-0.5 inline h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </Link>
      </div>
    </article>
  );
}