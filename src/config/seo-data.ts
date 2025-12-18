/**
 * Centralized SEO Data Management System
 * Single source of truth for all SEO-related data
 */

import type { ApiResponseData } from "../types/api";

// Business Information - Single Source of Truth
export const BUSINESS_INFO = {
  // Core Business Details
  name: "Nepean Mortgage",
  legalName: "Nepean Mortgage Pty Ltd",
  description:
    "Professional mortgage broker services in Nepean and Western Sydney. Expert advice on home loans, refinancing, investment property loans, and first home buyer assistance.",
  slogan: "Your Trusted Mortgage Partner in Nepean & Western Sydney",
  foundingDate: "2020",

  // Contact Information
  contact: {
    telephone: "+61-2-4721-5555",
    email: "info@nepeanmortgage.com.au",
    website: "https://nepeanmortgage.com.au",
  },

  // Business Address
  address: {
    streetAddress: "Suite 1, 123 High Street",
    addressLocality: "Nepean",
    addressRegion: "NSW",
    postalCode: "2747",
    addressCountry: "AU",
    coordinates: {
      latitude: -33.7506,
      longitude: 150.6919,
    },
  },

  // Service Areas
  serviceAreas: {
    primary: "Nepean",
    secondary: [
      "Penrith",
      "Blue Mountains",
      "Western Sydney",
      "Hawkesbury",
      "Camden",
    ],
    radius: 50, // kilometers
  },

  // Business Hours
  openingHours: {
    weekdays: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    saturday: {
      days: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
    sunday: {
      days: ["Sunday"],
      opens: null, // Closed
      closes: null,
    },
  },

  // Services Offered
  services: {
    primary: [
      "Home Loans",
      "Refinancing",
      "Investment Property Loans",
      "First Home Buyer Loans",
      "Commercial Loans",
      "SMSF Loans",
    ],
    categories: {
      "Home Loans": {
        description: "Comprehensive home loan solutions for owner-occupiers",
        keywords: [
          "home loans",
          "owner occupier loans",
          "residential mortgages",
        ],
      },
      Refinancing: {
        description:
          "Refinancing services to help you get better rates and terms",
        keywords: ["refinancing", "mortgage refinance", "loan restructure"],
      },
      "Investment Property Loans": {
        description: "Specialized loans for investment property purchases",
        keywords: [
          "investment loans",
          "property investment",
          "investor mortgages",
        ],
      },
      "First Home Buyer Loans": {
        description:
          "First home buyer assistance and specialized loan products",
        keywords: ["first home buyer", "FHB loans", "first home grants"],
      },
      "Commercial Loans": {
        description: "Commercial property and business loan solutions",
        keywords: [
          "commercial loans",
          "business loans",
          "commercial mortgages",
        ],
      },
      "SMSF Loans": {
        description: "Self-managed super fund property investment loans",
        keywords: ["SMSF loans", "super fund loans", "SMSF property"],
      },
    },
  },

  // Professional Credentials
  credentials: {
    memberships: [
      {
        name: "Mortgage & Finance Association of Australia",
        abbreviation: "MFAA",
        url: "https://www.mfaa.com.au",
      },
      {
        name: "Australian Securities and Investments Commission",
        abbreviation: "ASIC",
        url: "https://www.asic.gov.au",
      },
    ],
    licenses: [
      {
        type: "Australian Credit Licence",
        number: "ACL123456",
        authority: "ASIC",
      },
    ],
    certifications: [
      "Certificate IV in Finance and Mortgage Broking",
      "Diploma of Finance and Mortgage Broking Management",
    ],
  },

  // Business Classifications
  classifications: {
    naics: "522310", // Mortgage and Nonmortgage Loan Brokers
    isicV4: "6619", // Other activities auxiliary to financial services
    additionalType: "https://schema.org/MortgageBroker",
  },

  // Social Media Profiles
  socialMedia: {
    facebook: "https://www.facebook.com/nepeanmortgage",
    linkedin: "https://www.linkedin.com/company/nepean-mortgage",
    twitter: "https://twitter.com/nepeanmortgage",
    instagram: "https://www.instagram.com/nepeanmortgage",
  },

  // Business Assets
  assets: {
    logo: {
      url: "/images/logo/nepean-mortgage-logo.png",
      width: 300,
      height: 100,
      alt: "Nepean Mortgage Logo",
    },
    businessImage: {
      url: "/images/business/nepean-mortgage-office.jpg",
      width: 1200,
      height: 630,
      alt: "Nepean Mortgage Office",
    },
  },

  // Business Characteristics
  characteristics: {
    priceRange: "$$",
    paymentMethods: ["Cash", "Credit Card", "Bank Transfer", "Direct Debit"],
    currencies: ["AUD"],
    languages: ["English"],
    employeeCount: {
      min: 1,
      max: 10,
    },
  },
} as const;

// SEO Keywords - Centralized keyword management
export const SEO_KEYWORDS = {
  primary: [
    "mortgage broker",
    "home loans",
    "mortgage services",
    "loan broker",
    "mortgage advice",
  ],
  secondary: [
    "refinancing",
    "investment loans",
    "first home buyer",
    "commercial loans",
    "SMSF loans",
    "mortgage calculator",
  ],
  local: [
    "Nepean mortgage broker",
    "Penrith mortgage broker",
    "Western Sydney mortgage broker",
    "Blue Mountains mortgage broker",
    "mortgage broker near me",
  ],
  longTail: [
    "best mortgage broker in Nepean",
    "home loan specialist Western Sydney",
    "first home buyer assistance Nepean",
    "investment property loans Penrith",
    "mortgage refinancing Blue Mountains",
  ],
  serviceSpecific: {
    "home-loans": [
      "home loans",
      "residential mortgages",
      "owner occupier loans",
    ],
    refinancing: ["refinancing", "mortgage refinance", "loan restructure"],
    "investment-loans": [
      "investment loans",
      "property investment",
      "investor mortgages",
    ],
    "first-home-buyer": ["first home buyer", "FHB loans", "first home grants"],
    "commercial-loans": [
      "commercial loans",
      "business loans",
      "commercial mortgages",
    ],
    "smsf-loans": ["SMSF loans", "super fund loans", "SMSF property"],
  },
} as const;

// Page-specific SEO configurations
export const PAGE_SEO_CONFIG = {
  home: {
    title: "Expert Mortgage Broker Services in Nepean & Western Sydney",
    description:
      "Professional mortgage broker services in Nepean and Western Sydney. Expert advice on home loans, refinancing, investment property loans, and first home buyer assistance.",
    keywords: [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.local.slice(0, 3)],
    ogType: "business.business",
    priority: 1.0,
    changeFreq: "weekly",
  },
  about: {
    title: "About Nepean Mortgage - Your Trusted Mortgage Broker",
    description:
      "Learn about Nepean Mortgage, your trusted mortgage broker in Western Sydney. Professional, experienced, and committed to finding you the best home loan solutions.",
    keywords: [
      "about nepean mortgage",
      "mortgage broker team",
      "company profile",
      "mortgage expertise",
    ],
    ogType: "website",
    priority: 0.8,
    changeFreq: "monthly",
  },
  contact: {
    title: "Contact Nepean Mortgage - Expert Mortgage Broker Consultation",
    description:
      "Contact Nepean Mortgage for professional mortgage broker services. Get expert advice on home loans, refinancing, and investment property loans in Western Sydney.",
    keywords: [
      "contact mortgage broker",
      "mortgage consultation",
      "get quote",
      "mortgage advice",
    ],
    ogType: "website",
    priority: 0.9,
    changeFreq: "monthly",
  },
  services: {
    title: "Mortgage Broker Services - Home Loans, Refinancing & More",
    description:
      "Comprehensive mortgage broker services including home loans, refinancing, investment property loans, first home buyer assistance, and commercial loans.",
    keywords: [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.secondary.slice(0, 3)],
    ogType: "website",
    priority: 0.9,
    changeFreq: "monthly",
  },
  calculators: {
    title: "Free Mortgage Calculators - Home Loan & Repayment Calculators",
    description:
      "Use our free mortgage calculators to estimate your home loan repayments, borrowing capacity, and compare loan options. Professional mortgage broker tools.",
    keywords: [
      "mortgage calculator",
      "home loan calculator",
      "repayment calculator",
      "borrowing calculator",
    ],
    ogType: "website",
    priority: 0.7,
    changeFreq: "monthly",
  },
  faq: {
    title: "Mortgage FAQ - Common Home Loan Questions Answered",
    description:
      "Find answers to frequently asked questions about mortgages, home loans, refinancing, and mortgage broker services from Nepean Mortgage experts.",
    keywords: [
      "mortgage FAQ",
      "home loan questions",
      "mortgage help",
      "loan advice",
    ],
    ogType: "website",
    priority: 0.6,
    changeFreq: "monthly",
  },
} as const;

// Image configurations for different page types
export const SEO_IMAGES = {
  openGraph: {
    home: {
      url: "https://nepeanmortgage.com.au/images/og/og-home.jpg",
      width: 1200,
      height: 630,
      alt: "Expert Mortgage Broker Services in Nepean & Western Sydney - Nepean Mortgage",
    },
    services: {
      url: "https://nepeanmortgage.com.au/images/og/og-services.jpg",
      width: 1200,
      height: 630,
      alt: "Professional Mortgage Services - Nepean Mortgage",
    },
    about: {
      url: "https://nepeanmortgage.com.au/images/og/og-about.jpg",
      width: 1200,
      height: 630,
      alt: "About Nepean Mortgage - Your Trusted Mortgage Broker",
    },
    contact: {
      url: "https://nepeanmortgage.com.au/images/og/og-contact.jpg",
      width: 1200,
      height: 630,
      alt: "Contact Nepean Mortgage - Get Expert Mortgage Advice",
    },
    calculators: {
      url: "https://nepeanmortgage.com.au/images/og/og-calculators.jpg",
      width: 1200,
      height: 630,
      alt: "Free Mortgage Calculators - Nepean Mortgage",
    },
    fallback: {
      url: "https://nepeanmortgage.com.au/images/og/og-fallback.jpg",
      width: 1200,
      height: 630,
      alt: "Nepean Mortgage - Your Trusted Mortgage Broker",
    },
  },
  twitter: {
    home: {
      url: "https://nepeanmortgage.com.au/images/og/twitter-home.jpg",
      width: 1200,
      height: 600,
      alt: "Expert Mortgage Broker Services in Nepean & Western Sydney - Nepean Mortgage",
    },
    services: {
      url: "https://nepeanmortgage.com.au/images/og/twitter-services.jpg",
      width: 1200,
      height: 600,
      alt: "Professional Mortgage Services - Nepean Mortgage",
    },
    about: {
      url: "https://nepeanmortgage.com.au/images/og/twitter-about.jpg",
      width: 1200,
      height: 600,
      alt: "About Nepean Mortgage - Your Trusted Mortgage Broker",
    },
    contact: {
      url: "https://nepeanmortgage.com.au/images/og/twitter-contact.jpg",
      width: 1200,
      height: 600,
      alt: "Contact Nepean Mortgage - Get Expert Mortgage Advice",
    },
    calculators: {
      url: "https://nepeanmortgage.com.au/images/og/twitter-calculators.jpg",
      width: 1200,
      height: 600,
      alt: "Free Mortgage Calculators - Nepean Mortgage",
    },
    fallback: {
      url: "https://nepeanmortgage.com.au/images/og/twitter-fallback.jpg",
      width: 1200,
      height: 600,
      alt: "Nepean Mortgage - Your Trusted Mortgage Broker",
    },
  },
} as const;

// Utility functions to work with centralized data
export const getSEODataForPage = (pageKey: string) => {
  return (
    PAGE_SEO_CONFIG[pageKey as keyof typeof PAGE_SEO_CONFIG] ||
    PAGE_SEO_CONFIG.home
  );
};

export const getKeywordsForService = (serviceKey: string) => {
  return (
    SEO_KEYWORDS.serviceSpecific[
      serviceKey as keyof typeof SEO_KEYWORDS.serviceSpecific
    ] || SEO_KEYWORDS.primary
  );
};

export const getImageForPage = (
  pageKey: string,
  type: "openGraph" | "twitter" = "openGraph"
) => {
  const images = SEO_IMAGES[type];
  return images[pageKey as keyof typeof images] || images.fallback;
};

// Convert centralized data to API format for backward compatibility
export const convertToApiFormat = (): Partial<ApiResponseData> => {
  return {
    name: BUSINESS_INFO.name,
    site_title: BUSINESS_INFO.name,
    assets: {
      logo: BUSINESS_INFO.assets.logo.url,
      logo_inverted: BUSINESS_INFO.assets.logo.url,
      profile: BUSINESS_INFO.assets.businessImage.url,
    },
    hero_section: {
      title: BUSINESS_INFO.slogan,
      description: BUSINESS_INFO.description,
      banner: BUSINESS_INFO.assets.businessImage.url,
    },
    about: {
      title: `About ${BUSINESS_INFO.name}`,
      description: BUSINESS_INFO.description,
      profile: BUSINESS_INFO.assets.businessImage.url,
    },
    footer: {
      info: BUSINESS_INFO.description,
      contact: {
        email: BUSINESS_INFO.contact.email,
        phone: BUSINESS_INFO.contact.telephone,
      },
      copyright: `© ${new Date().getFullYear()} ${
        BUSINESS_INFO.name
      }. All rights reserved.`,
    },
  };
};
