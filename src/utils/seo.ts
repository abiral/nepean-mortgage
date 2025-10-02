// SEO Utility Functions
import {
  SEO_CONFIG,
  generateSEOConfigFromAPI,
  generatePageSEOConfig,
  MORTGAGE_KEYWORDS,
} from "../config/seo";
import seoSettings from "../data/seo-settings.json";
import pageOverrides from "../data/page-seo-overrides.json";
import type { ApiResponseData } from "../types/api";
import type {
  SEOPageData,
  LocalBusinessSchema,
  ServiceSchema,
  FAQSchema,
  SitemapPage,
  KeywordDensityMap,
} from "../types/seo";

/**
 * Generate comprehensive SEO data for a page using API data
 */
export const generatePageSEO = (
  pageKey: string,
  apiData: ApiResponseData,
  customData?: Partial<SEOPageData>
): SEOPageData => {
  const seoConfig = generateSEOConfigFromAPI(apiData);
  const pageConfigs = generatePageSEOConfig(apiData);
  const pageConfig = pageConfigs[pageKey as keyof typeof pageConfigs];

  if (!pageConfig) {
    // Fallback for unknown pages
    return {
      title:
        customData?.title || `${seoConfig.siteName} - ${seoConfig.siteTitle}`,
      description:
        customData?.description || seoConfig.businessInfo.description,
      keywords: customData?.keywords || SEO_CONFIG.fallbacks.keywords,
      canonicalUrl:
        customData?.canonicalUrl ||
        `${seoConfig.siteUrl}/${pageKey === "home" ? "" : pageKey}`,
      ogImage: customData?.ogImage || seoConfig.openGraph.images[0].url,
      ogType: customData?.ogType || "website",
      structuredData: customData?.structuredData || [],
      ...customData,
    };
  }

  return {
    title: customData?.title || pageConfig.title,
    description: customData?.description || pageConfig.description,
    keywords: customData?.keywords || pageConfig.keywords,
    canonicalUrl:
      customData?.canonicalUrl ||
      `${seoConfig.siteUrl}/${pageKey === "home" ? "" : pageKey}`,
    ogImage: customData?.ogImage || seoConfig.openGraph.images[0].url,
    ogType: customData?.ogType || "website",
    h1: customData?.h1 || pageConfig.h1,
    structuredData: customData?.structuredData || [],
    ...customData,
  };
};

/**
 * Generate Local Business structured data from API data
 */
export const generateLocalBusinessSchema = (
  apiData: ApiResponseData
): LocalBusinessSchema => {
  const seoConfig = generateSEOConfigFromAPI(apiData);
  const { businessInfo } = seoConfig;

  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: businessInfo.name,
    description: businessInfo.description,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    telephone: businessInfo.contactInfo.telephone,
    email: businessInfo.contactInfo.email,
    url: businessInfo.contactInfo.website,
    serviceArea: businessInfo.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mortgage Services",
      itemListElement: businessInfo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          description: `Professional ${service.toLowerCase()} services`,
        },
      })),
    },
    sameAs: Object.values(seoConfig.socialMedia).filter(Boolean),
  };
};

/**
 * Generate Service schema for specific mortgage services from API data
 */
export const generateServiceSchema = (
  apiData: ApiResponseData,
  serviceId?: string
): ServiceSchema => {
  const seoConfig = generateSEOConfigFromAPI(apiData);
  const { businessInfo } = seoConfig;

  // Find specific service from API data
  const service = serviceId
    ? apiData.services?.items?.find((s) => s.id === serviceId)
    : apiData.services?.items?.[0];

  const serviceName = service?.title || "Mortgage Services";
  const serviceDescription =
    service?.description || "Professional mortgage broker services";

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.contactInfo.website,
    },
    serviceType: "FinancialService",
    areaServed: businessInfo.serviceAreas,
  };
};

/**
 * Generate FAQ schema markup from API data
 */
export const generateFAQSchema = (apiData: ApiResponseData): FAQSchema => {
  const faqItems = apiData.faq?.items || [];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.description,
      },
    })),
  };
};

/**
 * Generate sitemap data for all pages using API data
 */
export const generateSitemapPages = (
  apiData: ApiResponseData
): SitemapPage[] => {
  const seoConfig = generateSEOConfigFromAPI(apiData);
  const pageConfigs = generatePageSEOConfig(apiData);
  const currentDate = new Date();

  return Object.entries(pageConfigs).map(([key, config]) => ({
    url: `${seoConfig.siteUrl}/${key === "home" ? "" : key}`,
    lastModified: currentDate,
    changeFrequency: config.changeFreq,
    priority: config.priority,
  }));
};

/**
 * Validate meta tag lengths and format
 */
export const validateSEOData = (
  seoData: SEOPageData
): {
  isValid: boolean;
  warnings: string[];
  errors: string[];
} => {
  const warnings: string[] = [];
  const errors: string[] = [];

  // Title validation
  if (!seoData.title) {
    errors.push("Title is required");
  } else if (seoData.title.length > 60) {
    warnings.push("Title is longer than 60 characters");
  } else if (seoData.title.length < 30) {
    warnings.push("Title is shorter than 30 characters");
  }

  // Description validation
  if (!seoData.description) {
    errors.push("Description is required");
  } else if (seoData.description.length > 160) {
    warnings.push("Description is longer than 160 characters");
  } else if (seoData.description.length < 120) {
    warnings.push("Description is shorter than 120 characters");
  }

  // Keywords validation
  if (seoData.keywords.length === 0) {
    warnings.push("No keywords specified");
  } else if (seoData.keywords.length > 10) {
    warnings.push("Too many keywords (>10)");
  }

  // Canonical URL validation
  if (seoData.canonicalUrl && !isValidUrl(seoData.canonicalUrl)) {
    errors.push("Invalid canonical URL format");
  }

  return {
    isValid: errors.length === 0,
    warnings,
    errors,
  };
};

/**
 * Calculate keyword density for content
 */
export const calculateKeywordDensity = (
  content: string,
  keywords: string[]
): KeywordDensityMap => {
  const words = content.toLowerCase().split(/\s+/);
  const totalWords = words.length;
  const densityMap: KeywordDensityMap = {};

  keywords.forEach((keyword) => {
    const keywordLower = keyword.toLowerCase();
    const count = words.filter(
      (word) => word.includes(keywordLower) || keywordLower.includes(word)
    ).length;

    densityMap[keyword] = {
      count,
      density: totalWords > 0 ? (count / totalWords) * 100 : 0,
    };
  });

  return densityMap;
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

/**
 * Extract and optimize keywords for mortgage industry
 */
export const optimizeKeywordsForMortgage = (
  baseKeywords: string[]
): string[] => {
  const allMortgageKeywords = [
    ...MORTGAGE_KEYWORDS.primary,
    ...MORTGAGE_KEYWORDS.secondary,
    ...MORTGAGE_KEYWORDS.local,
  ];

  // Combine base keywords with relevant mortgage keywords
  const optimizedKeywords = [
    ...baseKeywords,
    ...allMortgageKeywords.filter((keyword) =>
      baseKeywords.some(
        (base) =>
          keyword.includes(base.toLowerCase()) ||
          base.toLowerCase().includes(keyword)
      )
    ),
  ];

  // Remove duplicates and limit to 10 keywords
  return [...new Set(optimizedKeywords)].slice(0, 10);
};

/**
 * Generate robots meta content
 */
export const generateRobotsContent = (
  index: boolean = true,
  follow: boolean = true,
  additional: string[] = []
): string => {
  const directives = [
    index ? "index" : "noindex",
    follow ? "follow" : "nofollow",
    ...additional,
  ];

  return directives.join(", ");
};

/**
 * Helper function to validate URLs
 */
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Generate Open Graph tags data using API data
 */
export const generateOpenGraphData = (
  seoData: SEOPageData,
  apiData: ApiResponseData
) => {
  const seoConfig = generateSEOConfigFromAPI(apiData);

  return {
    "og:title": seoData.title,
    "og:description": seoData.description,
    "og:type": seoData.ogType || seoConfig.openGraph.type,
    "og:url": seoData.canonicalUrl || seoConfig.siteUrl,
    "og:site_name": seoConfig.siteName,
    "og:locale": seoConfig.openGraph.locale,
    "og:image": seoData.ogImage || seoConfig.openGraph.images[0].url,
    "og:image:width": seoConfig.openGraph.images[0].width?.toString(),
    "og:image:height": seoConfig.openGraph.images[0].height?.toString(),
    "og:image:alt": seoConfig.openGraph.images[0].alt,
  };
};

/**
 * Generate Twitter Card data using API data
 */
export const generateTwitterCardData = (
  seoData: SEOPageData,
  apiData: ApiResponseData
) => {
  const seoConfig = generateSEOConfigFromAPI(apiData);

  return {
    "twitter:card": "summary_large_image",
    "twitter:title": seoData.title,
    "twitter:description": seoData.description,
    "twitter:image": seoData.ogImage || seoConfig.openGraph.images[0].url,
  };
};

/**
 * Generate service-specific SEO data from API services
 */
export const generateServiceSEO = (
  apiData: ApiResponseData,
  serviceId: string,
  customData?: Partial<SEOPageData>
): SEOPageData => {
  const service = apiData.services?.items?.find((s) => s.id === serviceId);
  const seoConfig = generateSEOConfigFromAPI(apiData);

  if (!service) {
    return generatePageSEO("services", apiData, customData);
  }

  return {
    title: customData?.title || `${service.title} - ${seoConfig.siteName}`,
    description: customData?.description || service.description,
    keywords: customData?.keywords || [
      service.title.toLowerCase(),
      ...MORTGAGE_KEYWORDS.primary.slice(0, 3),
    ],
    canonicalUrl:
      customData?.canonicalUrl || `${seoConfig.siteUrl}/services/${serviceId}`,
    ogImage: customData?.ogImage || seoConfig.openGraph.images[0].url,
    ogType: customData?.ogType || "website",
    h1: customData?.h1 || service.title,
    structuredData: customData?.structuredData || [
      generateServiceSchema(apiData, serviceId),
    ],
    ...customData,
  };
};

/**
 * Get optimal Open Graph image with fallback system
 */
export const getOptimalOGImage = (pageKey: string, customImage?: string) => {
  // 1. Custom override from page settings
  const pageOverride = pageOverrides[pageKey as keyof typeof pageOverrides];
  if (
    pageOverride &&
    "ogImageOverride" in pageOverride &&
    pageOverride.ogImageOverride
  ) {
    return {
      url: pageOverride.ogImageOverride,
      width: 1200,
      height: 630,
      alt: `Custom image for ${pageKey}`,
    };
  }

  // 2. Custom image passed as parameter
  if (customImage) {
    return {
      url: customImage,
      width: 1200,
      height: 630,
      alt: `Custom image for ${pageKey}`,
    };
  }

  // 3. Page-specific image from settings
  const pageSpecificImage =
    seoSettings.openGraphImages[
      pageKey as keyof typeof seoSettings.openGraphImages
    ];
  if (pageSpecificImage) {
    return pageSpecificImage;
  }

  // 4. Default image
  if (seoSettings.openGraphImages.default) {
    return seoSettings.openGraphImages.default;
  }

  // 5. Final fallback
  return seoSettings.openGraphImages.fallback;
};

/**
 * Get optimal Twitter image with fallback system
 */
export const getOptimalTwitterImage = (
  pageKey: string,
  customImage?: string
) => {
  // 1. Custom override from page settings
  const pageOverride = pageOverrides[pageKey as keyof typeof pageOverrides];
  if (
    pageOverride &&
    "twitterImageOverride" in pageOverride &&
    pageOverride.twitterImageOverride
  ) {
    return {
      url: pageOverride.twitterImageOverride,
      width: 1200,
      height: 600,
      alt: `Custom Twitter image for ${pageKey}`,
    };
  }

  // 2. Custom image passed as parameter
  if (customImage) {
    return {
      url: customImage,
      width: 1200,
      height: 600,
      alt: `Custom Twitter image for ${pageKey}`,
    };
  }

  // 3. Twitter-specific default
  if (seoSettings.twitterImages.default) {
    return seoSettings.twitterImages.default;
  }

  // 4. Twitter fallback
  return seoSettings.twitterImages.fallback;
};

/**
 * Updated Open Graph data generation with smart image selection
 */
export const generateOpenGraphDataWithImages = (
  seoData: SEOPageData,
  apiData: ApiResponseData,
  pageKey: string
) => {
  const seoConfig = generateSEOConfigFromAPI(apiData);
  //   const ogImage = getOptimalOGImage(pageKey, seoData.ogImage);

  return {
    "og:title": seoData.title,
    "og:description": seoData.description,
    "og:type": seoData.ogType || seoConfig.openGraph.type,
    "og:url": seoData.canonicalUrl || seoConfig.siteUrl,
    "og:site_name": seoConfig.siteName,
    "og:locale": seoConfig.openGraph.locale,
    // "og:image": ogImage.url,
    // "og:image:width": ogImage.width.toString(),
    // "og:image:height": ogImage.height.toString(),
    // "og:image:alt": ogImage.alt,
  };
};

/**
 * Updated Twitter Card data generation with smart image selection
 */
export const generateTwitterCardDataWithImages = (
  seoData: SEOPageData,
  apiData: ApiResponseData,
  pageKey: string
) => {
  const twitterImage = getOptimalTwitterImage(pageKey, seoData.ogImage);

  return {
    "twitter:card": "summary_large_image",
    "twitter:title": seoData.title,
    "twitter:description": seoData.description,
    "twitter:image": twitterImage.url,
    "twitter:image:alt": twitterImage.alt,
  };
};

/**
 * Check if image URL exists and is accessible
 */
export const validateImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Get image dimensions from URL
 */
export const getImageDimensions = (
  url: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = url;
  });
};
