// lib/siteConfig.ts

// Define the SocialLink type here
export type SocialLink = {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
};

// Define a type for brand ventures
export type Venture = {
  initials: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  muted?: boolean;
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
};

export const siteConfig = {
  title: "Abraham of London",
  author: "Abraham of London",
  description:
    "Official site of Abraham of London — author, strategist, and fatherhood advocate.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    "https://abraham-of-london.netlify.app",
  socialLinks: [
    { href: "mailto:info@abrahamoflondon.org", label: "Email", icon: "/assets/images/social/email.svg" },
    { href: "tel:+442086225909", label: "Phone", icon: "/assets/images/social/phone.svg" },
    { href: "https://www.linkedin.com/in/abraham-adaramola-06630321/", label: "LinkedIn", icon: "/assets/images/social/linkedin.svg", external: true },
    { href: "https://x.com/AbrahamAda48634", label: "X", icon: "/assets/images/social/twitter.svg", external: true },
    { href: "https://www.facebook.com/share/1MRrKpUzMG/", label: "Facebook", icon: "/assets/images/social/facebook.svg", external: true },
    { href: "https://wa.me/447496334022", label: "WhatsApp", icon: "/assets/images/social/whatsapp.svg", external: true },
  ] as SocialLink[],
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || null,
  email: "info@abrahamoflondon.org",
  ogImage: "/assets/images/social/og-image.jpg",
  twitterImage: "/assets/images/social/twitter-image.webp",
  authorImage: "/assets/images/profile/abraham-of-london.jpg",
  ventures: [
    {
      initials: "AØL",
      title: "Abraham of London",
      description: "Strategic stewardship, thought leadership, and the standards that hold the family together.",
      href: "https://www.abrahamoflondon.org",
      cta: "Visit",
    },
    {
      initials: "IH",
      title: "InnovateHub",
      description: "Product and service strategy and hands-on build support for founders who want to trade with integrity and pace.",
      href: "#",
      cta: "You’re here",
      muted: true,
    },
    {
      initials: "AL",
      title: "Alomarada",
      description: "Business advisory guiding investors and mentoring African-diaspora entrepreneurs to develop African markets through ethical exploration of market gaps—with a practical commitment to unlocking the continent’s staggering human capital.",
      href: "https://alomarada.com",
      cta: "Learn more",
    },
    {
      initials: "EL",
      title: "Endureluxe",
      description: "Premium, sustainable fitness partnerships that promote wellbeing—powered by community and thoughtful technology, and complemented by writing that advances state-of-the-art knowledge and practical life wisdom.",
      href: "https://endureluxe.com",
      cta: "Discover",
    },
  ],
} satisfies Omit<SiteConfig,
  "siteUrl" | "socialLinks"
> & {
  siteUrl?: string;
  socialLinks: SocialLink[];
};

/**
 * Returns a full URL for the given path.
 * @param path The path of the URL (e.g., '/about', '/blog/my-post')
 */
export const absUrl = (path: string) =>
  `${siteConfig.siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;