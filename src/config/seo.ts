import type { ApiResponseData } from "../types/api";
import seoSettings from "../data/seo-settings.json";
import seoKeywords from "../data/seo-keywords.json";
import pageOverrides from "../data/page-seo-overrides.json";

// Load SEO configuration from JSON files
export const SEO_CONFIG = {
  siteUrl: seoSettings.website.siteUrl,
  titleTemplate: seoSettings.website.titleTemplate,
  fallbacks: seoSettings.fallbacks,
  businessDefaults: {
    legalName: seoSettings.business.legalName,
    address: {
      addressLocality: seoSettings.business.address.locality,
      addressRegion: seoSettings.business.address.region,
      addressCountry: seoSettings.business.address.country,
    },
    serviceAreas: seoSettings.business.serviceAreas,
  },
  socialMedia: seoSettings.socialMedia,
  openGraph: {
    type: "website",
    locale: "en_AU",
    images: seoSettings.openGraphImages,
  },
  twitter: {
    images: seoSettings.twitterImages,
  },
} as const;

// Load keywords from JSON file
export const MORTGAGE_KEYWORDS = seoKeywords;

/**
 * Generate dynamic SEO config from API data
 */
export const generateSEOConfigFromAPI = (apiData: ApiResponseData) => {
  return {
    siteName: apiData.name || SEO_CONFIG.fallbacks.siteName,
    siteTitle: apiData.site_title || SEO_CONFIG.fallbacks.title,
    siteUrl: SEO_CONFIG.siteUrl,
    titleTemplate: SEO_CONFIG.titleTemplate,

    // Business info from API + JSON settings
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
    },

    twitter: SEO_CONFIG.twitter,

    socialMedia: SEO_CONFIG.socialMedia,
  };
};

/**
 * Generate page-specific SEO configurations using API data and JSON overrides
 */
export const generatePageSEOConfig = (apiData: ApiResponseData) => {
  const siteName = apiData.name || SEO_CONFIG.fallbacks.siteName;

  return {
    // Main landing page (/) - Uses API data with JSON overrides
    home: {
      title: getHomeTitle(apiData),
      description: getHomeDescription(apiData),
      keywords: getHomeKeywords(apiData),
      h1: getHomeH1(apiData),
      priority: pageOverrides.home.priority,
      changeFreq: pageOverrides.home.changeFreq as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
    },

    // Other pages use JSON configuration with siteName replacement
    "privacy-policy": {
      title: `${pageOverrides["privacy-policy"].titleSuffix} - ${siteName}`,
      description: pageOverrides["privacy-policy"].description.replace(
        "{siteName}",
        siteName
      ),
      keywords: pageOverrides["privacy-policy"].keywords,
      h1: pageOverrides["privacy-policy"].h1,
      priority: pageOverrides["privacy-policy"].priority,
      changeFreq: pageOverrides["privacy-policy"].changeFreq as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
    },

    "website-policy": {
      title: `${pageOverrides["website-policy"].titleSuffix} - ${siteName}`,
      description: pageOverrides["website-policy"].description.replace(
        "{siteName}",
        siteName
      ),
      keywords: pageOverrides["website-policy"].keywords,
      h1: pageOverrides["website-policy"].h1,
      priority: pageOverrides["website-policy"].priority,
      changeFreq: pageOverrides["website-policy"].changeFreq as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
    },

    "feedback-and-complaints": {
      title: `${pageOverrides["feedback-and-complaints"].titleSuffix} - ${siteName}`,
      description: pageOverrides["feedback-and-complaints"].description.replace(
        "{siteName}",
        siteName
      ),
      keywords: pageOverrides["feedback-and-complaints"].keywords,
      h1: pageOverrides["feedback-and-complaints"].h1,
      priority: pageOverrides["feedback-and-complaints"].priority,
      changeFreq: pageOverrides["feedback-and-complaints"].changeFreq as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
    },
  };
};

/**
 * Get home page title - uses override or API data
 */
const getHomeTitle = (apiData: ApiResponseData): string => {
  if (pageOverrides.home.titleOverride) {
    return pageOverrides.home.titleOverride;
  }

  return (
    apiData.hero_section?.title ||
    `Expert Mortgage Broker Services in Nepean & Western Sydney`
  );
};

/**
 * Get home page description - uses override or generates from API data
 */
const getHomeDescription = (apiData: ApiResponseData): string => {
  if (pageOverrides.home.descriptionOverride) {
    return pageOverrides.home.descriptionOverride;
  }

  const hero = apiData.hero_section?.description;
  const services = apiData.services?.items
    ?.slice(0, 3)
    .map((s) => s.title.toLowerCase())
    .join(", ");

  if (hero && services) {
    return `${hero} Specializing in ${services} and more. Contact us for expert mortgage advice.`;
  } else if (hero) {
    return hero;
  } else if (services) {
    return `Professional mortgage broker services including ${services}. Get competitive rates and expert advice.`;
  }

  return "Professional mortgage broker services in Nepean. Get competitive home loan rates, expert refinancing advice, and personalized mortgage solutions.";
};

/**
 * Get home page keywords - uses overrides or generates from API + JSON data
 */
const getHomeKeywords = (apiData: ApiResponseData): string[] => {
  if (pageOverrides.home.keywordOverrides.length > 0) {
    return pageOverrides.home.keywordOverrides;
  }

  const baseKeywords = [
    ...MORTGAGE_KEYWORDS.primary,
    ...MORTGAGE_KEYWORDS.local.slice(0, 3),
  ];

  // Add service-specific keywords from API
  const serviceKeywords =
    apiData.services?.items
      ?.map((service) => service.title.toLowerCase())
      .slice(0, 3) || [];

  // Combine and deduplicate
  return [...new Set([...baseKeywords, ...serviceKeywords])].slice(0, 10);
};

/**
 * Get home page H1 - uses override or API data
 */
const getHomeH1 = (apiData: ApiResponseData): string => {
  if (pageOverrides.home.h1Override) {
    return pageOverrides.home.h1Override;
  }

  return (
    apiData.hero_section?.title ||
    "Professional Mortgage Broker Services in Nepean"
  );
};
