import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { siteConfig } from "@/lib/siteConfig";
import { BrandCard } from "@/components/BrandCard";

const earlyAccessForm = "/forms/early-access.html";
const AOF_URL =
  siteConfig.socialLinks.find((link) => link.label === "Abraham of London")
    ?.href || "/";

export default function InnovateHub() {
  const year = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InnovateHub",
    url: siteConfig.siteUrl,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.author,
      url: AOF_URL,
    },
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    description:
      "InnovateHub helps founders ship durable products with strategy, ethics, and disciplined execution—part of the Abraham of London family alongside Alomarada and Endureluxe.",
  };

  return (
    <>
      <Head>
        <title>InnovateHub — Abraham of London Ventures</title>
        {/* … meta + ld+json exactly as you have … */}
      </Head>

      <Layout title="InnovateHub — Abraham of London Ventures">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          {/* ...rest of your content, unchanged... */}
        </div>
      </Layout>
    </>
  );
}