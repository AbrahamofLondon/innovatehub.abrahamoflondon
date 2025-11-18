// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

import siteConfig, { getPageTitle } from "@/lib/siteConfig";

function MyApp({ Component, pageProps }: AppProps) {
  const baseTitle = getPageTitle();

  return (
    <>
      <Head>
        {/* Basic */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>{baseTitle}</title>
        <meta
          name="description"
          content={siteConfig.description}
        />
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <meta name="theme-color" content={siteConfig.themeBackground} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={baseTitle} />
        <meta
          property="og:description"
          content={siteConfig.description}
        />
        <meta
          property="og:url"
          content={siteConfig.siteUrl}
        />
        <meta
          property="og:image"
          content={siteConfig.ogImage}
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={baseTitle}
        />
        <meta
          name="twitter:description"
          content={siteConfig.description}
        />
        <meta
          name="twitter:image"
          content={siteConfig.twitterImage}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;