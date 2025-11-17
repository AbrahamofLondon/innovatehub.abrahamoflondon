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
  status?: "active" | "emerging" | "development" | "legacy";
  category?: "advisory" | "product" | "community" | "media";
  featured?: boolean;
};

/**
 * Enumerate all "canonical" routes you actually support.
 * Add to this union instead of sprinkling string paths around the codebase.
 */
export type RouteId =
  | "home"
  | "about"
  | "blogIndex"
  | "contentIndex"
  | "booksIndex"
  | "ventures"
  | "downloadsIndex"
  | "strategyLanding"
  | "contact"
  | "innovateHubAbout"
  | "innovateHubHome";

/**
 * Route configuration – minimal but explicit.
 */
export interface RouteConfig {
  id: RouteId;
  /** Canonical pathname, ALWAYS starting with "/" */
  path: string;
  /** Optional human label (for nav) */
  label?: string;
}

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
  // Route configuration
  routes: Record<RouteId, RouteConfig>;
  // Page title helper method
  getPageTitle: (pageTitle?: string) => string;
};

// -----------------------------------------------------------------------------
// 2. CONFIGURATION VALUES
// -----------------------------------------------------------------------------

// Helper to determine the base URL more cleanly
const getSiteUrl = (): string => {
    if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
    if (process.env.URL) return process.env.URL;
    if (process.env.DEPLOY_PRIME_URL) return process.env.DEPLOY_PRIME_URL;
    
    return "https://www.abrahamoflondon.org";
};

// Venture URLs
const INNOVATEHUB_URL =
  process.env.NEXT_PUBLIC_INNOVATEHUB_URL ||
  process.env.NEXT_PUBLIC_INNOVATEHUB_ALT_URL ||
  "https://innovatehub.abrahamoflondon.org";

const ALOMARADA_URL =
  process.env.NEXT_PUBLIC_ALOMARADA_URL || "https://alomarada.com";

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
      external: false,
      color: "#DB4437" 
    },
    { 
      href: "tel:+442086225909", 
      label: "Phone", 
      icon: "/assets/images/social/phone.svg", 
      external: false,
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
      external: false,
      color: "#002E6E" 
    },
  ] as const, 

  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || null,
  email: "info@abrahamoflondon.org",
  ogImage: "/assets/images/social/og-image.jpg",
  twitterImage: "/assets/images/social/twitter-image.webp",
  authorImage: "/assets/images/profile/abraham-of-london.jpg",
  
  themeBackground: "#f7f5ee", 

  ventures: [
    {
      initials: "AØL",
      title: "Abraham of London",
      description: "Strategic stewardship, thought leadership, and the standards that hold the family together. Fatherhood advocacy, legacy building, and principled leadership.",
      href: "https://www.abrahamoflondon.org",
      cta: "You're here",
      muted: true,
      themeColor: "#002E6E",
      status: "active",
      category: "community",
      featured: true
    },
    {
      initials: "IH",
      title: "InnovateHub",
      description: "Product and service strategy and hands-on build support for founders who want to trade with integrity and pace. Innovation consulting and capability building.",
      href: INNOVATEHUB_URL, 
      cta: "Visit InnovateHub",
      themeColor: "#174b35",
      status: "active",
      category: "advisory",
      featured: true
    },
    {
      initials: "AL",
      title: "Alomarada",
      description: "Business advisory guiding investors and mentoring African-diaspora entrepreneurs to develop African markets through ethical exploration of market gaps—with a practical commitment to unlocking the continent's staggering human capital.",
      href: ALOMARADA_URL,
      cta: "Visit Alomarada",
      themeColor: "#D35400",
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
      themeColor: "#5C6A72",
      status: "development",
      category: "product",
      featured: false
    },
  ] as const,

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
  },

  // Route configuration
  routes: {
    home: {
      id: "home",
      path: "/",
      label: "Home",
    },
    about: {
      id: "about",
      path: "/about",
      label: "About",
    },
    blogIndex: {
      id: "blogIndex",
      path: "/blog",
      label: "Insights",
    },
    contentIndex: {
      id: "contentIndex",
      path: "/content",
      label: "All Content",
    },
    booksIndex: {
      id: "booksIndex",
      path: "/books",
      label: "Books",
    },
    ventures: {
      id: "ventures",
      path: "/ventures",
      label: "Ventures",
    },
    downloadsIndex: {
      id: "downloadsIndex",
      path: "/downloads",
      label: "Downloads",
    },
    strategyLanding: {
      id: "strategyLanding",
      path: "/strategy",
      label: "Strategy",
    },
    contact: {
      id: "contact",
      path: "/contact",
      label: "Contact",
    },
    innovateHubAbout: {
      id: "innovateHubAbout",
      path: "/about",
      label: "About",
    },
    innovateHubHome: {
      id: "innovateHubHome",
      path: "/",
      label: "Home",
    },
  },

  // Page title helper method
  getPageTitle: (pageTitle?: string): string => {
    const base = siteConfig.title || "Abraham of London";
    if (!pageTitle || typeof pageTitle !== "string") return base;
    return `${pageTitle} | ${base}`;
  }

} satisfies SiteConfig;

// -----------------------------------------------------------------------------
// 3. HELPER FUNCTIONS
// -----------------------------------------------------------------------------

/**
 * Normalise a path – always leading slash, no trailing slash (except "/").
 */
function normalisePath(raw: string): string {
  const s = String(raw || "").trim();
  if (!s) return "/";
  const withLead = s.startsWith("/") ? s : `/${s}`;
  if (withLead === "/") return "/";
  return withLead.replace(/\/+$/u, "");
}

/**
 * Look up the canonical path for a given route id.
 */
export function getRoutePath(id: RouteId): string {
  const cfg = siteConfig.routes[id];
  if (!cfg) {
    if (process.env.NODE_ENV !== "production") {
      // Fail loudly in dev so we don't ship broken links.
      // eslint-disable-next-line no-console
      console.warn(`[siteConfig] Unknown route id: ${id as string}`);
    }
    return "/";
  }
  return normalisePath(cfg.path);
}

/**
 * Build an internal href from either a route id or a raw path.
 */
export function internalHref(target: RouteId | string): string {
  // Handle RouteId case first
  if (typeof target === "string" && target in siteConfig.routes) {
    return getRoutePath(target as RouteId);
  }
  
  // Handle string paths
  if (typeof target === "string") {
    // If it's already a proper path, normalize it
    if (target.startsWith("/") || target.startsWith("#") || target.startsWith("mailto:") || target.startsWith("tel:")) {
      return target;
    }
    // Otherwise treat as path fragment
    return normalisePath(`/${target}`);
  }
  
  // Handle RouteId directly
  return getRoutePath(target);
}

/**
 * Build an absolute URL safely (for OG tags, emails, sitemaps, etc.).
 */
export function absUrl(path: string | RouteId): string {
  const href = typeof path === "string" ? internalHref(path) : getRoutePath(path);
  if (/^https?:\/\//iu.test(href)) return href;
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  return `${siteConfig.siteUrl}${href === "/" ? "" : href}`;
}

/**
 * Compose a page title consistently.
 */
export function getPageTitle(pageTitle?: string): string {
  const base = siteConfig.title || "Abraham of London";
  if (!pageTitle || typeof pageTitle !== "string") return base;
  return `${pageTitle} | ${base}`;
}

/**
 * Check if a route is active (for navigation highlighting)
 */
export function isActiveRoute(currentPath: string, target: RouteId | string): boolean {
  const targetPath = internalHref(target);
  const normalizedCurrent = normalisePath(currentPath);
  
  if (targetPath === "/") {
    return normalizedCurrent === "/";
  }
  
  return normalizedCurrent.startsWith(targetPath);
}

/**
 * Returns a full URL for the given path.
 */
export const absUrlLegacy = (path: string): string =>
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
  return siteConfig.ventures.filter(venture => venture.featured === true);
};

/**
 * Get active ventures
 */
export const getActiveVentures = (): readonly Venture[] => {
  return siteConfig.ventures.filter(venture => venture.status === "active");
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

/**
 * Get primary contact information
 */
export const getPrimaryContact = (): { email: string; phone: string } => {
  const phoneLink = siteConfig.socialLinks.find(link => link.label === "Phone");
  return {
    email: siteConfig.email,
    phone: phoneLink?.href.replace('tel:', '') || '+442086225909'
  };
};

/**
 * Check if a link should open externally
 */
export const shouldOpenExternally = (link: SocialLink): boolean => {
  return link.external === true;
};

/**
 * Validate venture data structure
 */
export const validateVenture = (venture: Venture): boolean => {
  return Boolean(
    venture.title &&
    venture.description &&
    venture.href &&
    venture.cta &&
    venture.initials
  );
};

// Convenience exports for common routes
export const routes = {
  home: siteConfig.routes.home.path,
  about: siteConfig.routes.about.path,
  blog: siteConfig.routes.blogIndex.path,
  content: siteConfig.routes.contentIndex.path,
  books: siteConfig.routes.booksIndex.path,
  ventures: siteConfig.routes.ventures.path,
  downloads: siteConfig.routes.downloadsIndex.path,
  strategy: siteConfig.routes.strategyLanding.path,
  contact: siteConfig.routes.contact.path,
  innovateHubAbout: siteConfig.routes.innovateHubAbout.path,
  innovateHubHome: siteConfig.routes.innovateHubHome.path,
} as const;

export default siteConfig;