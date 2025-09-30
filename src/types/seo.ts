// SEO Type Definitions

export interface SEOPageData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "business.business";
  structuredData?: StructuredDataObject[];
  h1?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultKeywords: string[];
  businessInfo: LocalBusinessInfo;
  socialMedia: SocialMediaLinks;
  openGraph: OpenGraphConfig;
}

export interface LocalBusinessInfo {
  name: string;
  legalName: string;
  description: string;
  address: PostalAddress;
  contactInfo: ContactInfo;
  serviceAreas: string[];
  services: string[];
}

export interface PostalAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface ContactInfo {
  telephone: string;
  email: string;
  website: string;
}

export interface SocialMediaLinks {
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export interface OpenGraphConfig {
  type: string;
  locale: string;
  siteName: string;
  images: OpenGraphImage[];
}

export interface OpenGraphImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

// Structured Data Types
export interface StructuredDataObject {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

export interface LocalBusinessSchema extends StructuredDataObject {
  "@type": "FinancialService" | "LocalBusiness";
  name: string;
  description: string;
  address: PostalAddress;
  telephone: string;
  email: string;
  url: string;
  openingHours?: string[];
  serviceArea?: GeoCircle | string[];
  hasOfferCatalog?: OfferCatalog;
  sameAs?: string[];
}

export interface ServiceSchema extends StructuredDataObject {
  "@type": "Service";
  name: string;
  description: string;
  provider: Organization;
  serviceType: string;
  areaServed: string[];
}

export interface FAQSchema extends StructuredDataObject {
  "@type": "FAQPage";
  mainEntity: Question[];
}

export interface Question {
  "@type": "Question";
  name: string;
  acceptedAnswer: Answer;
}

export interface Answer {
  "@type": "Answer";
  text: string;
}

export interface Organization {
  "@type": "Organization";
  name: string;
  url: string;
}

export interface GeoCircle {
  "@type": "GeoCircle";
  geoMidpoint: GeoCoordinates;
  geoRadius: string;
}

export interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

export interface OfferCatalog {
  "@type": "OfferCatalog";
  name: string;
  itemListElement: Offer[];
}

export interface Offer {
  "@type": "Offer";
  itemOffered: Service;
}

export interface Service {
  "@type": "Service";
  name: string;
  description: string;
}

// Page Configuration Types
export interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  priority: number;
  changeFreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}

export interface SitemapPage {
  url: string;
  lastModified: Date;
  changeFrequency: PageSEOConfig["changeFreq"];
  priority: number;
}

export interface RobotsConfig {
  userAgent: string;
  allow: string[];
  disallow: string[];
  sitemap: string[];
  crawlDelay?: number;
}

// Content SEO Types
export interface ContentSEOData {
  wordCount: number;
  readingTime: number;
  keywordDensity: KeywordDensityMap;
  headingStructure: HeadingHierarchy;
  internalLinks: InternalLinkData[];
  externalLinks: ExternalLinkData[];
  images: ImageSEOMetadata[];
  lastUpdated: Date;
}

export interface KeywordDensityMap {
  [keyword: string]: {
    count: number;
    density: number;
  };
}

export interface HeadingHierarchy {
  h1: string[];
  h2: string[];
  h3: string[];
  h4: string[];
  h5: string[];
  h6: string[];
}

export interface InternalLinkData {
  href: string;
  anchorText: string;
  title?: string;
}

export interface ExternalLinkData {
  href: string;
  anchorText: string;
  rel: string;
  title?: string;
}

export interface ImageSEOMetadata {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  width: number;
  height: number;
  format: string;
  fileSize: number;
}
