// lib/siteConfig.ts

// -----------------------------------------------------------------------------
// 1. TYPE DEFINITIONS
// -----------------------------------------------------------------------------

// Define the SocialLink type here
export type SocialLink = {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
  // PREMIUM TOUCH: Add a color code for potential use in UIs
  color?: string; 
};

// Define a type for brand ventures
export type Venture = {
  initials: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  muted?: boolean;
  // PREMIUM TOUCH: Add a distinct color for the venture's logo/theme
  themeColor?: string;
};

export type SiteConfig = {
  title: string;
  author: string;
  description: string;
  siteUrl: string;
  socialLinks: SocialLink[];
  gaMeasurementId?: string | null;
  email: string;
  ogImage: string;
  twitterImage: string;
  authorImage: string;
  ventures: Venture[];
  // PREMIUM TOUCH: Add a general site background color variable
  themeBackground: string; 
};

// -----------------------------------------------------------------------------
// 2. CONFIGURATION VALUES
// -----------------------------------------------------------------------------

// Helper to determine the base URL more cleanly
const getSiteUrl = () => {
    // Netlify recommended variables
    if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
    if (process.env.URL) return process.env.URL;
    if (process.env.DEPLOY_PRIME_URL) return process.env.DEPLOY_PRIME_URL;
    
    // Fallback for local development or general testing
    return "https://abraham-of-london.netlify.app"; 
}


export const siteConfig = {
  title: "Abraham of London",
  author: "Abraham of London",
  description:
    "Official site of Abraham of London — author, strategist, and fatherhood advocate.",
  
  // Cleaned up logic for URL determination
  siteUrl: getSiteUrl(), 

  socialLinks: [
    { href: "mailto:info@abrahamoflondon.org", label: "Email", icon: "/assets/images/social/email.svg", color: "#DB4437" },
    { href: "tel:+442086225909", label: "Phone", icon: "/assets/images/social/phone.svg", color: "#0077B5" },
    { href: "https://www.linkedin.com/in/abraham-adaramola-06630321/", label: "LinkedIn", icon: "/assets/images/social/linkedin.svg", external: true, color: "#0A66C2" },
    { href: "https://x.com/AbrahamAda48634", label: "X", icon: "/assets/images/social/twitter.svg", external: true, color: "#000000" },
    { href: "https://www.facebook.com/share/1MRrKpUzMG/", label: "Facebook", icon: "/assets/images/social/facebook.svg", external: true, color: "#1877F2" },
    { href: "https://wa.me/447496334022", label: "WhatsApp", icon: "/assets/images/social/whatsapp.svg", external: true, color: "#25D366" },
  ] as const, // Use 'as const' for strong type inference

  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || null,
  email: "info@abrahamoflondon.org",
  ogImage: "/assets/images/social/og-image.jpg",
  twitterImage: "/assets/images/social/twitter-image.webp",
  authorImage: "/assets/images/profile/abraham-of-london.jpg",
  
  // Added site-wide theme color
  themeBackground: "#f7f5ee", 

  ventures: [
    {
      initials: "AØL",
      title: "Abraham of London",
      description: "Strategic stewardship, thought leadership, and the standards that hold the family together.",
      href: "https://www.abrahamoflondon.org",
      cta: "Visit",
      themeColor: "#0b2e1f", // Forest
    },
    {
      initials: "IH",
      title: "InnovateHub",
      description: "Product and service strategy and hands-on build support for founders who want to trade with integrity and pace.",
      href: "https://innovatehub.abrahamoflondon.org", // Updated to a real URL structure
      cta: "You’re here",
      muted: true,
      themeColor: "#174b35", // A lighter green
    },
    {
      initials: "AL",
      title: "Alomarada",
      description: "Business advisory guiding investors and mentoring African-diaspora entrepreneurs to develop African markets through ethical exploration of market gaps—with a practical commitment to unlocking the continent’s staggering human capital.",
      href: "https://alomarada.com",
      cta: "Learn more",
      themeColor: "#005a8d", // A deep blue
    },
    {
      initials: "EL",
      title: "Endureluxe",
      description: "Premium, sustainable fitness partnerships that promote wellbeing—powered by community and thoughtful technology, and complemented by writing that advances state-of-the-art knowledge and practical life wisdom.",
      href: "https://endureluxe.com",
      cta: "Discover",
      themeColor: "#5c4033", // A warm earth tone
    },
  ] as const, // Use 'as const' for strong type inference
// The satisfies utility ensures the shape matches SiteConfig 
} satisfies Omit<SiteConfig, "siteUrl" | "socialLinks" | "ventures"> & {
    siteUrl: string;
    socialLinks: readonly SocialLink[];
    ventures: readonly Venture[];
};

// -----------------------------------------------------------------------------
// 3. UTILITY FUNCTION
// -----------------------------------------------------------------------------

/**
 * Returns a full URL for the given path.
 * @param path The path of the URL (e.g., '/about', '/blog/my-post')
 */
export const absUrl = (path: string) =>
  `${siteConfig.siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;