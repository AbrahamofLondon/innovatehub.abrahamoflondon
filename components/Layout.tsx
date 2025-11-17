// components/Layout.tsx
import type { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({
  children,
  title = "Abraham of London",
  description = "World-class strategies, ventures, and tools from Abraham of London.",
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-cream antialiased">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;