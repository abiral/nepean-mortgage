import { useMemo } from "react";
import businessConfig from "../data/business-config.json";
import { useApi } from "./useApi";
import type { ApiResponseData } from "../types/api";

export interface BusinessConfig {
  business: {
    name: string;
    legalName: string;
    description: string;
    slogan: string;
    foundingDate: string;
    website: string;
    logo: {
      url: string;
      width: number;
      height: number;
      alt: string;
    };
    image: {
      url: string;
      width: number;
      height: number;
      alt: string;
    };
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  serviceAreas: {
    primary: string;
    secondary: string[];
    radius: number;
    description: string;
  };
  businessHours: {
    weekdays: {
      days: string[];
      opens: string;
      closes: string;
    };
    saturday: {
      days: string[];
      opens: string;
      closes: string;
    };
    sunday: {
      days: string[];
      closed: boolean;
    };
  };
  services: Array<{
    id: string;
    name: string;
    description: string;
    category: string;
  }>;
  credentials: {
    licenses: Array<{
      name: string;
      number: string;
      issuer: string;
    }>;
    memberships: Array<{
      name: string;
      abbreviation: string;
      url: string;
    }>;
    certifications: string[];
  };
  businessDetails: {
    industryCode: {
      naics: string;
      isic: string;
    };
    businessType: string;
    priceRange: string;
    paymentMethods: string[];
    currencies: string[];
    languages: string[];
  };
  socialMedia: {
    facebook: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
}

export interface EnhancedBusinessConfig extends BusinessConfig {
  // Enhanced data from API when available
  apiData?: ApiResponseData;
  isApiLoaded: boolean;
  // Computed properties
  allServiceAreas: string[];
  formattedAddress: string;
  socialMediaLinks: string[];
  openingHoursSpecification: Array<{
    "@type": string;
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
}

/**
 * Centralized business configuration hook
 * Provides single source of truth for all business data
 * Merges static config with dynamic API data when available
 */
export const useBusinessConfig = (): EnhancedBusinessConfig => {
  const { data: apiData, loading } = useApi();

  const enhancedConfig = useMemo((): EnhancedBusinessConfig => {
    const config = businessConfig as BusinessConfig;

    // Merge API data with static config when available
    const mergedConfig: EnhancedBusinessConfig = {
      ...config,
      apiData: apiData || undefined,
      isApiLoaded: !loading && !!apiData,

      // Override with API data when available
      business: {
        ...config.business,
        name: apiData?.name || config.business.name,
        description: apiData?.about?.description || config.business.description,
      },

      contact: {
        ...config.contact,
        phone: apiData?.footer?.contact?.phone || config.contact.phone,
        email: apiData?.footer?.contact?.email || config.contact.email,
      },

      // Computed properties
      allServiceAreas: [
        config.serviceAreas.primary,
        ...config.serviceAreas.secondary,
      ],

      formattedAddress: `${config.address.streetAddress}, ${config.address.addressLocality}, ${config.address.addressRegion} ${config.address.postalCode}`,

      socialMediaLinks: Object.values(config.socialMedia).filter(Boolean),

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: config.businessHours.weekdays.days,
          opens: config.businessHours.weekdays.opens,
          closes: config.businessHours.weekdays.closes,
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: config.businessHours.saturday.days,
          opens: config.businessHours.saturday.opens,
          closes: config.businessHours.saturday.closes,
        },
      ],
    };

    return mergedConfig;
  }, [apiData, loading]);

  return enhancedConfig;
};

/**
 * Get business service by ID
 */
export const useBusinessService = (serviceId: string) => {
  const config = useBusinessConfig();

  return useMemo(() => {
    const staticService = config.services.find(
      (service) => service.id === serviceId
    );
    const apiService = config.apiData?.services?.items?.find(
      (service) => service.id === serviceId
    );

    if (apiService && staticService) {
      return {
        ...staticService,
        title: apiService.title,
        description: apiService.description,
      };
    }

    return staticService || apiService;
  }, [config, serviceId]);
};

/**
 * Get formatted business hours for display
 */
export const useFormattedBusinessHours = () => {
  const config = useBusinessConfig();

  return useMemo(() => {
    const { businessHours } = config;

    return {
      weekdays: `${businessHours.weekdays.days.join(", ")}: ${
        businessHours.weekdays.opens
      } - ${businessHours.weekdays.closes}`,
      saturday: `${businessHours.saturday.days[0]}: ${businessHours.saturday.opens} - ${businessHours.saturday.closes}`,
      sunday: "Sunday: Closed",
      structured: config.openingHoursSpecification,
    };
  }, [config]);
};

export default useBusinessConfig;
