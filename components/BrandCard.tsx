// components/BrandCard.tsx

import Link from "next/link";
import type React from "react";
import type { Venture } from "@/lib/siteConfig";

const DEFAULT_BRAND_COLOR = "#0b2e1f"; // forest

export function BrandCard({
  initials,
  title,
  description,
  href,
  cta,
  muted,
  themeColor,
}: Venture): JSX.Element {
  const isExternal = typeof href === "string" && href.startsWith("http");
  const accentColor = themeColor || DEFAULT_BRAND_COLOR;

  const dynamicStyle: React.CSSProperties = {
    ["--card-accent-color" as string]: accentColor,
  };

  return (
    <article
      style={dynamicStyle}
      className={[
        "relative flex flex-col rounded-2xl border bg-gradient-to-br p-6 shadow-xl transition-all duration-300",
        "from-black/60 via-deepCharcoal to-forest/70",
        "border-white/10 text-cream",
        "hover:-translate-y-1 hover:shadow-2xl",
        muted ? "opacity-70 cursor-default hover:-translate-y-0" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-start gap-4">
        {/* Monogram / initials */}
        <div
          className={[
            "flex h-14 w-14 items-center justify-center rounded-xl",
            "text-lg font-extrabold tracking-wide text-white shadow-lg",
            muted ? "opacity-70" : "shadow-softGold/40",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{ backgroundColor: accentColor }}
        >
          {initials}
        </div>

        <div className="flex-1">
          <h3
            className="font-serif text-xl font-semibold"
            style={{ color: accentColor }}
          >
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-200">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="text-xs uppercase tracking-[0.22em] text-softGold/80">
          Venture · Abraham of London
        </div>

        <Link
          href={href}
          className={[
            "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold",
            muted
              ? "border border-white/10 bg-white/5 text-gray-300 cursor-default pointer-events-none"
              : "border border-softGold/60 bg-softGold/10 text-softGold hover:bg-softGold/20 hover:border-softGold",
          ]
            .filter(Boolean)
            .join(" ")}
          {...(isExternal && !muted
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <span>{cta}</span>
          {!muted && isExternal && (
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6h8m0 0v8m0-8L9 15"
              />
            </svg>
          )}
        </Link>
      </div>
    </article>
  );
}