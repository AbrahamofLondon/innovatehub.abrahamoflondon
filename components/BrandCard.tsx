// components/BrandCard.tsx

import Link from "next/link";
import { Venture } from "@/lib/siteConfig";

export function BrandCard({ initials, title, description, href, cta, muted }: Venture) {
  const isExternal = href.startsWith("http");
  return (
    <article
      className={`relative rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-lg ${
        muted ? "opacity-80" : ""
      }`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-950 to-green-800 font-extrabold tracking-wide text-white ${
          muted ? "opacity-75" : ""
        }`}
      >
        {initials}
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-lg font-bold text-green-950">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">{description}</p>
        <Link
          href={href}
          className={`mt-4 inline-block font-bold text-green-950 underline transition hover:text-green-800 ${
            muted ? "pointer-events-none opacity-50" : ""
          }`}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}