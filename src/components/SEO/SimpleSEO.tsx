import React from "react";
import { Helmet } from "react-helmet-async";

interface SimpleSEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

const PAGE_DATA = {
  "/": {
    title:
      "Expert Mortgage Broker Services in Nepean & Western Sydney - Nepean Mortgage",
    description:
      "Professional mortgage broker services in Penrith and Nepean region. Home loans, refinancing, first home buyer assistance with competitive rates and personalized service.",
  },
  "/privacy-policy": {
    title: "Privacy Policy - Nepean Mortgage",
    description:
      "Privacy policy for Nepean Mortgage. Learn how we collect, use, and protect your personal information when using our mortgage broker services.",
  },
  "/website-policy": {
    title: "Website Policy - Nepean Mortgage",
    description:
      "Website terms and conditions for Nepean Mortgage. Important information about using our website and mortgage broker services.",
  },
  "/feedback-and-complaints": {
    title: "Feedback and Complaints - Nepean Mortgage",
    description:
      "Submit feedback or complaints about our mortgage broker services. We're committed to resolving any issues and improving our service.",
  },
};

const SimpleSEO: React.FC<SimpleSEOProps> = ({
  title,
  description,
  path = "/",
  ogImage,
}) => {
  const pageData = PAGE_DATA[path as keyof typeof PAGE_DATA] || PAGE_DATA["/"];
  const finalTitle = title || pageData.title;
  const finalDescription = description || pageData.description;
  const canonicalUrl = `https://nepeanmortgage.com.au${
    path === "/" ? "" : path
  }`;
  
  const baseUrl = import.meta.env.PROD 
    ? "https://nepeanmortgage.com.au" 
    : window.location.origin;
  const defaultOgImage = ogImage || `${baseUrl}/images/og-facebook.jpg`;
  const twitterImage = `${baseUrl}/images/og-twitter.jpg`;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nepean Mortgage" />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Nepean Mortgage - Expert Mortgage Broker Services" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:secure_url" content={defaultOgImage} />
      <meta property="og:locale" content="en_AU" />

      <meta property="fb:app_id" content="" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:image:alt" content="Nepean Mortgage - Expert Mortgage Broker Services" />
      <meta name="twitter:site" content="@nepeanmortgage" />
      <meta name="twitter:creator" content="@nepeanmortgage" />
      
      <meta name="theme-color" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="robots" content="index, follow" />
      <html lang="en-AU" />
    </Helmet>
  );
};

export default SimpleSEO;
