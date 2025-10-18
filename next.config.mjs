/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keeps your app clean and detects potential problems
  reactStrictMode: true,

  // RECOMMENDED PREMIUM TOUCH: Enable standalone output for Netlify deployment
  output: 'standalone', 

  // --- WORLD-CLASS ENHANCEMENT: Asset Prefixing ---
  // Ensures assets (like the new logo image) are correctly linked 
  // even if the application is deployed to a subdirectory or CDN.
  // We use an empty string for the default root deployment case.
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',

  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: false, 
  },
  
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://abraham-of-london.netlify.app',
    // Expose base path for use in components if needed
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },
};

export default nextConfig;