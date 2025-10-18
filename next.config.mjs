// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configs (like reactStrictMode: true, output: 'standalone')

  // 💥 CRITICAL FIX: FORCE ASSET PREFIX TO ROOT (/)
  // This is essential for a Next.js app on a custom subdomain/subpath 
  // with Netlify to correctly load the compiled CSS and static images.
  assetPrefix: '/', 

  images: {
    // Setting unoptimized: true is the best practice when using HTML <img> tags 
    // for logos and is essential for deployment stability.
    unoptimized: true, 
    formats: ['image/avif', 'image/webp'],
  },
  
  // Setting the public base path to match the asset prefix for consistency
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://innovatehub.abrahamoflondon.org',
    NEXT_PUBLIC_BASE_PATH: '/', 
  },
};

export default nextConfig;