// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keeps your app clean and detects potential problems
  reactStrictMode: true,

  // RECOMMENDED PREMIUM TOUCH: Enable standalone output for Netlify deployment
  output: 'standalone', 

  // 💥 CRITICAL FIX: Set assetPrefix to '/' for Subdomain Deployments
  // This forces all static assets (CSS, JS, images) to load from the root of the subdomain.
  assetPrefix: '/', 

  images: {
    formats: ['image/avif', 'image/webp'],
    // Setting unoptimized: true is safer for static img tags on Netlify
    unoptimized: true, // Switched from 'false' for greater deployment stability
  },
  
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://innovatehub.abrahamoflondon.org',
    // Set base path explicitly to '/' to match the assetPrefix
    NEXT_PUBLIC_BASE_PATH: '/', 
  },
};

export default nextConfig;