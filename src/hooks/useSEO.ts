import { useMemo } from "react";
import { useApi } from "./useApi";
import {
  generatePageSEO,
  generateSEOConfigFromAPI,
  generateServiceSEO,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "../utils/seo";
import type { SEOPageData } from "../types/seo";

/**
 * Hook to generate SEO data from API
 */
export const useSEO = (pageKey: string, customSEO?: Partial<SEOPageData>) => {
  const { data: apiData } = useApi();

  const seoData = useMemo(() => {
    if (!apiData) return null;
    return generatePageSEO(pageKey, apiData, customSEO);
  }, [apiData, pageKey, customSEO]);

  const seoConfig = useMemo(() => {
    if (!apiData) return null;
    return generateSEOConfigFromAPI(apiData);
  }, [apiData]);

  return {
    seoData,
    seoConfig,
    isReady: !!apiData,
  };
};

/**
 * Hook to generate service-specific SEO data
 */
export const useServiceSEO = (
  serviceId: string,
  customSEO?: Partial<SEOPageData>
) => {
  const { data: apiData } = useApi();

  const seoData = useMemo(() => {
    if (!apiData) return null;
    return generateServiceSEO(apiData, serviceId, customSEO);
  }, [apiData, serviceId, customSEO]);

  const service = useMemo(() => {
    if (!apiData) return null;
    return apiData.services?.items?.find((s) => s.id === serviceId);
  }, [apiData, serviceId]);

  return {
    seoData,
    service,
    isReady: !!apiData && !!service,
  };
};

/**
 * Hook to generate structured data
 */
export const useStructuredData = () => {
  const { data: apiData } = useApi();

  const localBusinessSchema = useMemo(() => {
    if (!apiData) return null;
    return generateLocalBusinessSchema(apiData);
  }, [apiData]);

  const faqSchema = useMemo(() => {
    if (!apiData || !apiData.faq?.items?.length) return null;
    return generateFAQSchema(apiData);
  }, [apiData]);

  const generateServiceSchema = useMemo(() => {
    return (serviceId?: string) => {
      if (!apiData) return null;
      return generateServiceSchema(apiData, serviceId);
    };
  }, [apiData]);

  return {
    localBusinessSchema,
    faqSchema,
    generateServiceSchema,
    isReady: !!apiData,
  };
};

/**
 * Hook to get SEO-optimized content from API
 */
export const useSEOContent = () => {
  const { data: apiData } = useApi();

  const content = useMemo(() => {
    if (!apiData) return null;

    return {
      // Hero section with SEO optimization
      hero: {
        title: apiData.hero_section?.title,
        description: apiData.hero_section?.description,
        h1: apiData.hero_section?.title,
      },

      // About section
      about: {
        title: apiData.about?.title,
        description: apiData.about?.description,
        h2: apiData.about?.title,
      },

      // Services with SEO structure
      services: {
        title: apiData.services?.title,
        items: apiData.services?.items?.map((service) => ({
          ...service,
          h3: service.title,
          seoTitle: `${service.title} - Professional Mortgage Services`,
          seoDescription: service.description,
        })),
      },

      // FAQ with schema-ready structure
      faq: {
        title: apiData.faq?.title,
        description: apiData.faq?.description,
        items: apiData.faq?.items?.map((faq) => ({
          ...faq,
          question: faq.title,
          answer: faq.description,
        })),
      },

      // Process steps
      process: {
        title: apiData.process?.title,
        description: apiData.process?.description,
        items: apiData.process?.items,
      },

      // Why choose us
      whyUs: {
        title: apiData.why_us?.title,
        description: apiData.why_us?.description,
        items: apiData.why_us?.items,
      },
    };
  }, [apiData]);

  return {
    content,
    isReady: !!apiData,
  };
};

/**
 * Hook to validate SEO data
 */
export const useSEOValidation = (seoData: SEOPageData | null) => {
  const validation = useMemo(() => {
    if (!seoData) return null;

    const warnings: string[] = [];
    const errors: string[] = [];

    // Title validation
    if (!seoData.title) {
      errors.push("Title is required");
    } else if (seoData.title.length > 60) {
      warnings.push(
        `Title is ${seoData.title.length} characters (recommended: 30-60)`
      );
    } else if (seoData.title.length < 30) {
      warnings.push(
        `Title is ${seoData.title.length} characters (recommended: 30-60)`
      );
    }

    // Description validation
    if (!seoData.description) {
      errors.push("Description is required");
    } else if (seoData.description.length > 160) {
      warnings.push(
        `Description is ${seoData.description.length} characters (recommended: 120-160)`
      );
    } else if (seoData.description.length < 120) {
      warnings.push(
        `Description is ${seoData.description.length} characters (recommended: 120-160)`
      );
    }

    // Keywords validation
    if (seoData.keywords.length === 0) {
      warnings.push("No keywords specified");
    } else if (seoData.keywords.length > 10) {
      warnings.push(`${seoData.keywords.length} keywords (recommended: 3-10)`);
    }

    return {
      isValid: errors.length === 0,
      warnings,
      errors,
      score: calculateSEOScore(seoData, warnings.length, errors.length),
    };
  }, [seoData]);

  return validation;
};

/**
 * Calculate SEO score based on various factors
 */
const calculateSEOScore = (
  seoData: SEOPageData,
  warningCount: number,
  errorCount: number
): number => {
  let score = 100;

  // Deduct points for errors and warnings
  score -= errorCount * 20;
  score -= warningCount * 5;

  // Bonus points for good practices
  if (
    seoData.title &&
    seoData.title.length >= 30 &&
    seoData.title.length <= 60
  ) {
    score += 5;
  }

  if (
    seoData.description &&
    seoData.description.length >= 120 &&
    seoData.description.length <= 160
  ) {
    score += 5;
  }

  if (seoData.keywords.length >= 3 && seoData.keywords.length <= 10) {
    score += 5;
  }

  if (seoData.canonicalUrl) {
    score += 5;
  }

  if (seoData.structuredData && seoData.structuredData.length > 0) {
    score += 10;
  }

  return Math.max(0, Math.min(100, score));
};
