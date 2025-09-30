import type { ApiResponseData } from "../types/api";

// Static SEO Configuration (non-content related)
export const SEO_CONFIG = {
  siteUrl: "https://nepeanmortgage.com.au", // Update with actual domain
  titleTemplate: "%s | %s", // Will be: Page Title | Site Name

  // Default fallbacks when API data is not available
  fallbacks: {
    siteName: "Nepean Mortgage",
    title: "Expert Mortgage Broker Services",
    description:
      "Professional mortgage broker services. Get expert advice on home loans, refinancing, and investment property loans with competitive rates.",
    keywords: [
      "mortgage broker",
      "home loans",
      "mortgage refinancing",
      "first home buyer",
      "investment property loans",
      "mortgage calculator",
    ],
  },

  // Business Information Template (will be populated from API + static data)
  businessDefaults: {
    legalName: "Nepean Mortgage Pty Ltd", // Static as unlikely to change
    address: {
      addressLocality: "Nepean",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    serviceAreas: [
      "Nepean",
      "Penrith",
      "Blue Mountains",
      "Western Sydney",
      "NSW",
    ],
  },

  // Social Media Links (to be configured)
  socialMedia: {
    facebook: "",
    linkedin: "",
    twitter: "",
    instagram: "",
  },

  // Default Open Graph settings
  openGraph: {
    type: "website",
    locale: "en_AU",
    defaultImage: {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Professional Mortgage Broker Services",
    },
  },
} as const;

/**
 * Generate dynamic SEO config from API data
 */
export const generateSEOConfigFromAPI = (apiData: ApiResponseData) => {
  return {
    siteName: apiData.name || SEO_CONFIG.fallbacks.siteName,
    siteTitle: apiData.site_title || SEO_CONFIG.fallbacks.title,
    siteUrl: SEO_CONFIG.siteUrl,
    titleTemplate: SEO_CONFIG.titleTemplate,

    // Business info from API + defaults
    businessInfo: {
      name: apiData.name,
      legalName: SEO_CONFIG.businessDefaults.legalName,
      description:
        apiData.about?.description || SEO_CONFIG.fallbacks.description,
      address: {
        streetAddress: "", // Not in API, could be added later
        addressLocality: SEO_CONFIG.businessDefaults.address.addressLocality,
        addressRegion: SEO_CONFIG.businessDefaults.address.addressRegion,
        postalCode: "", // Not in API, could be added later
        addressCountry: SEO_CONFIG.businessDefaults.address.addressCountry,
      },
      contactInfo: {
        telephone: apiData.footer?.contact?.phone || "",
        email: apiData.footer?.contact?.email || "",
        website: SEO_CONFIG.siteUrl,
      },
      serviceAreas: SEO_CONFIG.businessDefaults.serviceAreas,
      services: apiData.services?.items?.map((service) => service.title) || [],
    },

    // Open Graph with dynamic data
    openGraph: {
      ...SEO_CONFIG.openGraph,
      siteName: apiData.name || SEO_CONFIG.fallbacks.siteName,
      images: [
        {
          ...SEO_CONFIG.openGraph.defaultImage,
          alt: `${
            apiData.name || SEO_CONFIG.fallbacks.siteName
          } - Professional Mortgage Broker Services`,
        },
      ],
    },

    socialMedia: SEO_CONFIG.socialMedia,
  };
};

// Mortgage Industry Keywords by Category (static as these don't change)
export const MORTGAGE_KEYWORDS = {
  primary: [
    "mortgage broker",
    "home loans",
    "mortgage refinancing",
    "first home buyer loans",
    "investment property loans",
  ],

  secondary: [
    "mortgage calculator",
    "home loan rates",
    "mortgage pre-approval",
    "refinance calculator",
    "mortgage advice",
    "loan comparison",
    "mortgage specialist",
  ],

  longTail: [
    "best mortgage rates in Nepean",
    "first home buyer mortgage broker",
    "investment property loan specialist",
    "mortgage refinancing calculator",
    "home loan pre-approval process",
    "mortgage broker near me",
    "commercial property loans",
    "self-employed home loans",
  ],

  local: [
    "Nepean mortgage broker",
    "Penrith mortgage services",
    "Blue Mountains home loans",
    "Western Sydney mortgage broker",
    "NSW mortgage specialist",
    "mortgage broker near me",
  ],
} as const;

/**
 * Generate page-specific SEO configurations using API data
 */
export const generatePageSEOConfig = (apiData: ApiResponseData) => {
  const siteName = apiData.name || SEO_CONFIG.fallbacks.siteName;

  return {
    home: {
      title:
        apiData.hero_section?.title ||
        `Expert Mortgage Broker Services in Nepean & Western Sydney`,
      description:
        apiData.hero_section?.description ||
        "Professional mortgage broker services in Nepean. Get competitive home loan rates, expert refinancing advice, and personalized mortgage solutions.",
      keywords: [
        ...MORTGAGE_KEYWORDS.primary,
        ...MORTGAGE_KEYWORDS.local.slice(0, 3),
      ],
      h1:
        apiData.hero_section?.title ||
        "Professional Mortgage Broker Services in Nepean",
      priority: 1.0,
      changeFreq: "weekly" as const,
    },

    about: {
      title: `About ${siteName} - Your Trusted Mortgage Broker`,
      description:
        apiData.about?.description ||
        `Learn about ${siteName}'s experienced team of mortgage brokers. We provide personalized home loan solutions with access to multiple lenders and competitive rates.`,
      keywords: [
        "about mortgage broker",
        "mortgage broker experience",
        "loan specialist team",
      ],
      h1: apiData.about?.title || `About ${siteName}`,
      priority: 0.8,
      changeFreq: "monthly" as const,
    },

    services: {
      title: "Mortgage Services - Home Loans, Refinancing & More",
      description: apiData.services?.items
        ? `Comprehensive mortgage services including ${apiData.services.items
            .slice(0, 3)
            .map((s) => s.title.toLowerCase())
            .join(", ")} and more. Expert advice and competitive rates.`
        : "Comprehensive mortgage services including home loans, refinancing, investment property loans, and first home buyer assistance.",
      keywords: apiData.services?.items?.map((service) =>
        service.title.toLowerCase()
      ) || ["mortgage services", "loan types"],
      h1: apiData.services?.title || "Our Mortgage Services",
      priority: 0.9,
      changeFreq: "monthly" as const,
    },

    calculators: {
      title: "Mortgage Calculators - Loan Repayment & Refinancing Tools",
      description:
        "Free mortgage calculators for loan repayments, refinancing savings, and borrowing capacity. Plan your home loan with our easy-to-use financial tools.",
      keywords: [
        ...MORTGAGE_KEYWORDS.secondary.filter((k) => k.includes("calculator")),
      ],
      h1: "Mortgage Calculators",
      priority: 0.7,
      changeFreq: "monthly" as const,
    },

    contact: {
      title: `Contact ${siteName} - Get Your Free Consultation`,
      description: `Contact ${siteName} for expert mortgage advice. Book your free consultation today and discover how we can help you secure the best home loan.`,
      keywords: [
        "contact mortgage broker",
        "mortgage consultation",
        "mortgage advice",
      ],
      h1: "Contact Us",
      priority: 0.8,
      changeFreq: "monthly" as const,
    },

    faq: {
      title: "Mortgage FAQ - Common Home Loan Questions Answered",
      description:
        apiData.faq?.description ||
        "Get answers to frequently asked questions about mortgages, home loans, refinancing, and the mortgage application process from our expert brokers.",
      keywords: ["mortgage FAQ", "home loan questions", "mortgage process"],
      h1: apiData.faq?.title || "Frequently Asked Questions",
      priority: 0.6,
      changeFreq: "monthly" as const,
    },
  };
};
