// SEO Constants and Static Data

// Default mortgage-related FAQ data for schema markup (fallback when API doesn't have FAQs)
export const DEFAULT_MORTGAGE_FAQS = [
  {
    question: "What is a mortgage broker and how can they help me?",
    answer:
      "A mortgage broker is a licensed professional who acts as an intermediary between you and potential lenders. They have access to multiple lenders and can help you find the best home loan rates and terms that suit your financial situation. Brokers can save you time and money by comparing options and handling the application process.",
  },
  {
    question: "How much deposit do I need for a home loan?",
    answer:
      "The deposit required varies depending on the lender and loan type. Generally, you'll need at least 5-20% of the property's purchase price as a deposit. First home buyers may be eligible for schemes that require lower deposits, and some lenders offer low deposit home loans with Lenders Mortgage Insurance (LMI).",
  },
  {
    question:
      "What is the difference between fixed and variable interest rates?",
    answer:
      "A fixed interest rate remains the same for a set period (usually 1-5 years), providing certainty in your repayments. A variable interest rate can change based on market conditions and lender decisions. Many borrowers choose a split loan with both fixed and variable portions to balance security and flexibility.",
  },
  {
    question: "How long does the mortgage application process take?",
    answer:
      "The mortgage application process typically takes 2-6 weeks from application to settlement, depending on the complexity of your situation and the lender's processing times. Pre-approval can be obtained in 1-3 days, which helps when making offers on properties.",
  },
  {
    question: "What costs are involved in getting a home loan?",
    answer:
      "Home loan costs may include application fees, valuation fees, legal fees, stamp duty, building and pest inspections, and ongoing fees like annual package fees. Your mortgage broker can provide a detailed breakdown of all costs involved in your specific situation.",
  },
  {
    question: "Can I refinance my existing home loan?",
    answer:
      "Yes, refinancing involves switching your existing home loan to a new lender or loan product, often to secure better interest rates, access equity, or change loan features. A mortgage broker can help you compare refinancing options and calculate potential savings.",
  },
  {
    question: "What documents do I need for a home loan application?",
    answer:
      "Common documents include payslips, tax returns, bank statements, employment contracts, identification documents, and details of assets and liabilities. Self-employed applicants may need additional documentation such as business financial statements and BAS statements.",
  },
  {
    question: "Do mortgage brokers charge fees?",
    answer:
      "Most mortgage brokers don't charge fees to borrowers as they receive commission from lenders when loans settle. However, some brokers may charge fees for complex situations or ongoing services. Always ask about fees upfront and ensure you understand the broker's remuneration structure.",
  },
] as const;

// Local SEO data for different service areas (static as these don't change frequently)
export const SERVICE_AREAS = [
  {
    name: "Nepean",
    description:
      "Professional mortgage broker services in Nepean with local market expertise and personalized service.",
    coordinates: { latitude: -33.7536, longitude: 150.689 },
    postcodes: ["2747", "2748", "2749"],
  },
  {
    name: "Penrith",
    description:
      "Expert home loan services in Penrith with access to multiple lenders and competitive rates.",
    coordinates: { latitude: -33.7506, longitude: 150.6944 },
    postcodes: ["2750", "2751", "2752"],
  },
  {
    name: "Blue Mountains",
    description:
      "Specialized mortgage services for Blue Mountains residents with understanding of local property market.",
    coordinates: { latitude: -33.7022, longitude: 150.3111 },
    postcodes: ["2777", "2778", "2779", "2780", "2782", "2783", "2784", "2785"],
  },
] as const;

// SEO-optimized content snippets that can be used as fallbacks
export const SEO_CONTENT_SNIPPETS = {
  homeHero: {
    title: "Expert Mortgage Broker Services in Nepean & Western Sydney",
    subtitle:
      "Get competitive home loan rates and personalized mortgage solutions",
    description:
      "Professional mortgage broker with access to 40+ lenders. Specializing in home loans, refinancing, and investment property finance across Nepean and Western Sydney.",
  },

  servicesIntro: {
    title: "Comprehensive Mortgage Services",
    description:
      "From first home buyer loans to complex commercial finance, we provide expert mortgage broker services tailored to your needs.",
  },

  aboutIntro: {
    title: "Your Trusted Mortgage Broker",
    description:
      "With years of experience in the mortgage industry, we're committed to finding you the best home loan solution with competitive rates and exceptional service.",
  },

  contactCTA: {
    title: "Ready to Get Started?",
    description:
      "Contact our expert mortgage brokers today for a free consultation and discover how we can help you secure the perfect home loan.",
  },
} as const;

// Meta tag templates for different content types
export const META_TEMPLATES = {
  service: {
    titleTemplate: "{serviceName} - Expert {serviceType} Services | {siteName}",
    descriptionTemplate:
      "Professional {serviceName} services in Nepean. Get competitive rates and expert advice for {serviceType}. Contact us for a free consultation.",
  },

  location: {
    titleTemplate: "Mortgage Broker {locationName} - Home Loans & Refinancing",
    descriptionTemplate:
      "Expert mortgage broker services in {locationName}. Competitive home loan rates, refinancing, and personalized mortgage solutions. Contact us today.",
  },

  calculator: {
    titleTemplate: "{calculatorName} - Free Mortgage Calculator | {siteName}",
    descriptionTemplate:
      "Use our free {calculatorName} to estimate your mortgage payments, savings, and borrowing capacity. Get instant results and expert mortgage advice.",
  },
} as const;

// Structured data templates
export const SCHEMA_TEMPLATES = {
  financialService: {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    serviceType: "Mortgage Broker",
    category: "Financial Services",
  },

  professionalService: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    serviceType: "Mortgage Brokerage",
  },

  webPage: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-AU",
  },
} as const;

// Common mortgage industry terms for SEO optimization
export const MORTGAGE_GLOSSARY = {
  LVR: "Loan to Value Ratio",
  LMI: "Lenders Mortgage Insurance",
  FHOG: "First Home Owner Grant",
  PPOR: "Principal Place of Residence",
  IO: "Interest Only",
  "P&I": "Principal and Interest",
  SMSF: "Self Managed Super Fund",
  ABN: "Australian Business Number",
  PAYG: "Pay As You Go",
  BAS: "Business Activity Statement",
} as const;

// SEO performance thresholds
export const SEO_THRESHOLDS = {
  title: { min: 30, max: 60 },
  description: { min: 120, max: 160 },
  keywords: { min: 3, max: 10 },
  h1: { min: 20, max: 70 },
  keywordDensity: { min: 0.5, max: 3.0 },
  contentLength: { min: 300, max: 2000 },
} as const;

// Helper function to generate service-specific keywords from API data
export const generateServiceKeywords = (serviceName: string): string[] => {
  const baseKeywords = [
    serviceName.toLowerCase(),
    `${serviceName.toLowerCase()} services`,
    `${serviceName.toLowerCase()} broker`,
    `${serviceName.toLowerCase()} specialist`,
  ];

  // Add location-based keywords
  const locationKeywords = SERVICE_AREAS.map(
    (area) => `${serviceName.toLowerCase()} ${area.name.toLowerCase()}`
  );

  return [...baseKeywords, ...locationKeywords].slice(0, 8);
};

// Helper function to generate FAQ schema from API data with fallbacks
export const generateFAQsWithFallback = (
  apiFAQs?: Array<{ title: string; description: string }>
) => {
  if (apiFAQs && apiFAQs.length > 0) {
    return apiFAQs.map((faq) => ({
      question: faq.title,
      answer: faq.description,
    }));
  }

  return DEFAULT_MORTGAGE_FAQS;
};
