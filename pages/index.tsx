import Head from "next/head";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://innovatehub.netlify.app";
const title = "InnovateHub";
const description = "A launchpad for founders building sustainable, scalable products.";

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content="/assets/social/og-image.jpg"/>
        <meta property="og:url" content={SITE_URL}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="canonical" href={SITE_URL}/>
      </Head>

      <main style={{minHeight: "100vh", padding: "4rem 1.25rem", maxWidth: 960, margin: "0 auto"}}>
        <h1 style={{fontSize: "3rem", fontWeight: 800, marginBottom: "0.5rem"}}>InnovateHub</h1>
        <p style={{fontSize: "1.25rem", opacity: 0.85, maxWidth: 720}}>
          Tools, playbooks, and hands-on support to ship durable products faster.
        </p>

        <div style={{display: "flex", gap: "0.75rem", marginTop: "1.5rem"}}>
          <Link href="/contact" style={{background:"#0b2e1f", color:"#fff", padding:"0.75rem 1.25rem", borderRadius:999}}>
            Get Early Access
          </Link>
          <a href="https://abrahamoflondon.org" style={{border:"1px solid #0b2e1f", padding:"0.75rem 1.25rem", borderRadius:999}}>
            Abraham of London
          </a>
        </div>
      </main>
    </>
  );
}
