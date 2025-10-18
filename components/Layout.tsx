// components/Layout.tsx

import React from 'react';
import Head from 'next/head';

// Define the props for the Layout component
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

/**
 * A simple layout component to provide consistent structure,
 * Head metadata, and a footer/header if needed across pages.
 */
const Layout: React.FC<LayoutProps> = ({ children, title = "InnovateHub", description = "World-class strategies and tools." }) => {
  return (
    <>
      <Head>
        {/* Set default title and description, can be overridden by props */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* This is the main wrapper. We use the cream background color defined in tailwind.config.js 
        and ensure the font is smooth (antialiased) for a premium look.
      */}
      <div className="min-h-screen bg-cream antialiased">
        {/* Main Content Area */}
        <main>{children}</main>
        
        {/* You would typically include a Header and Footer component here */}
      </div>
    </>
  );
};

export default Layout;