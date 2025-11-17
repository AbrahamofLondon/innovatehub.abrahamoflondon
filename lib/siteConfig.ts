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
  themeColor?: string; // Used for dynamic styling in BrandCard
  status?: "In development" | "emerging" | "development" | "legacy";
  category?: "advisory" | "product" | "community" | "media";
  featured?: true;
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
  themeBackground: string; 
  // New enhanced fields
  keywords: string[];
  language: string;
  locale: string;
  timezone: string;
  copyright: string;
  foundingYear: number;
  // Brand identity
  brand: {
    name: string;
    tagline: string;
    mission: string;
    values: string[];
  };
};

// -----------------------------------------------------------------------------
// 2. CONFIGURATION VALUES
// -----------------------------------------------------------------------------

// Helper to determine the base URL more cleanly
const getSiteUrl = () => {
    if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
    if (process.env.URL) return process.env.URL;
    if (process.env.DEPLOY_PRIME_URL) return process.env.DEPLOY_PRIME_URL;
    
    return "https://www.abrahamoflondon.org"; // Updated to primary domain
};

export const siteConfig = {
  title: "Abraham of London",
  author: "Abraham of London",
  description:
    "Official site of Abraham of London — author, strategist, and fatherhood advocate. Strategic ventures in advisory, innovation, and legacy building.",
  
  siteUrl: getSiteUrl(), 

  socialLinks: [
    { 
      href: "mailto:info@abrahamoflondon.org", 
      label: "Email", 
      icon: "/assets/images/social/email.svg", 
      color: "#DB4437" 
    },
    { 
      href: "tel:+442086225909", 
      label: "Phone", 
      icon: "/assets/images/social/phone.svg", 
      color: "#0077B5" 
    },
    { 
      href: "https://www.linkedin.com/in/abraham-adaramola-06630321/", 
      label: "LinkedIn", 
      icon: "/assets/images/social/linkedin.svg", 
      external: true, 
      color: "#0A66C2" 
    },
    { 
      href: "https://x.com/AbrahamAda48634", 
      label: "X", 
      icon: "/assets/images/social/twitter.svg", 
      external: true, 
      color: "#000000" 
    },
    { 
      href: "https://www.facebook.com/share/1MRrKpUzMG/", 
      label: "Facebook", 
      icon: "/assets/images/social/facebook.svg", 
      external: true, 
      color: "#1877F2" 
    },
    { 
      href: "https://wa.me/447496334022", 
      label: "WhatsApp", 
      icon: "/assets/images/social/whatsapp.svg", 
      external: true, 
      color: "#25D366" 
    },
    // Primary brand link
    { 
      href: "https://www.abrahamoflondon.org", 
      label: "Abraham of London", 
      icon: "", 
      external: true, 
      color: "#002E6E" 
    },
  ] as const, 

  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || null,
  email: "info@abrahamoflondon.org",
  ogImage: "/assets/images/social/og-image.jpg",
  twitterImage: "/assets/images/social/twitter-image.webp",
  authorImage: "/assets/images/profile/abraham-of-london.jpg",
  
  themeBackground: "#f7f5ee", 

  // Updated ventures with correct URLs and enhanced metadata
  ventures: [
    {
      initials: "AØL",
      title: "Abraham of London",
      description: "Strategic stewardship, thought leadership, and the standards that hold the family together. Fatherhood advocacy, legacy building, and principled leadership.",
      href: "https://www.abrahamoflondon.org",
      cta: "You're here",
      muted: true,
      themeColor: "#002E6E", // Deep Blue
      status: "active",
      category: "community",
      featured: true
    },
    {
      initials: "IH",
      title: "InnovateHub",
      description: "Product and service strategy and hands-on build support for founders who want to trade with integrity and pace. Innovation consulting and capability building.",
      href: "https://innovatehub.abrahamoflondon.org", 
      cta: "Visit InnovateHub",
      themeColor: "#174b35", // Forest Green
      status: "active",
      category: "advisory",
      featured: true
    },
    {
      initials: "AL",
      title: "Alomarada",
      description: "Business advisory guiding investors and mentoring African-diaspora entrepreneurs to develop African markets through ethical exploration of market gaps—with a practical commitment to unlocking the continent's staggering human capital.",
      href: "https://alomarada.com",
      cta: "Visit Alomarada",
      themeColor: "#D35400", // Earthy Orange/Brown
      status: "active", 
      category: "advisory",
      featured: true
    },
    {
      initials: "EL",
      title: "Endureluxe",
      description: "Premium, sustainable fitness partnerships that promote wellbeing—powered by community and thoughtful technology, and complemented by writing that advances state-of-the-art knowledge and practical life wisdom.",
      href: "https://alomarada.com/endureluxe",
      cta: "Explore Endureluxe",
      themeColor: "#5C6A72", // Muted Grey/Slate
      status: "development",
      category: "product"
    },
  ] as const,

  // New enhanced configuration
  keywords: [
    "Abraham of London",
    "fatherhood",
    "legacy building",
    "strategic advisory",
    "innovation consulting",
    "African diaspora",
    "business strategy",
    "leadership",
    "venture building",
    "Alomarada",
    "InnovateHub",
    "Endureluxe"
  ],

  language: "en-GB",
  locale: "en_GB",
  timezone: "Europe/London",
  copyright: `© ${new Date().getFullYear()} Abraham of London. All rights reserved.`,
  foundingYear: 2020,

  // Enhanced brand identity
  brand: {
    name: "Abraham of London",
    tagline: "Strategic stewardship for generational impact",
    mission: "To build durable ventures and communities rooted in faith, responsibility, and legacy that outlast any one individual.",
    values: [
      "Faith-rooted leadership",
      "Strategic discipline", 
      "Generational thinking",
      "Community focus",
      "Excellence in execution",
      "Sustainable impact"
    ]
  }
} satisfies Omit<SiteConfig, "siteUrl" | "socialLinks" | "ventures"> & {
    siteUrl: string;
    socialLinks: readonly SocialLink[];
    ventures: readonly Venture[];
};

/**
 * Returns a full URL for the given path.
 * @param path The path of the URL (e.g., '/about', '/blog/my-post')
 */
export const absUrl = (path: string) =>
  `${siteConfig.siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;

/**
 * Get venture by slug/identifier
 */
export const getVenture = (slug: string): Venture | undefined => {
  return siteConfig.ventures.find(venture => 
    venture.title.toLowerCase().includes(slug.toLowerCase()) ||
    venture.initials.toLowerCase() === slug.toLowerCase()
  );
};

/**
 * Get featured ventures (for homepage highlights)
 */
export const getFeaturedVentures = (): readonly Venture[] => {
  return siteConfig.ventures.filter(venture => venture.featured);
};

/**
 * Get ventures by category
 */
export const getVenturesByCategory = (category: Venture['category']): readonly Venture[] => {
  return siteConfig.ventures.filter(venture => venture.category === category);
};

/**
 * Get ventures by status
 */
export const getVenturesByStatus = (status: Venture['status']): readonly Venture[] => {
  return siteConfig.ventures.filter(venture => venture.status === status);
};

/**
 * Get social link by label
 */
export const getSocialLink = (label: string): SocialLink | undefined => {
  return siteConfig.socialLinks.find(link => link.label === label);
};

// Export default configuration
export default siteConfig;