import React, { useEffect } from "react";

interface DirectSEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

const PAGE_DATA = {
  "/": {
    title: "Expert Mortgage Broker Services in Nepean & Western Sydney - Nepean Mortgage",
    description: "Professional mortgage broker services in Penrith and Nepean region. Home loans, refinancing, first home buyer assistance with competitive rates and personalized service.",
  },
  "/privacy-policy": {
    title: "Privacy Policy - Nepean Mortgage",
    description: "Privacy policy for Nepean Mortgage. Learn how we collect, use, and protect your personal information when using our mortgage broker services.",
  },
  "/website-policy": {
    title: "Website Policy - Nepean Mortgage",
    description: "Website terms and conditions for Nepean Mortgage. Important information about using our website and mortgage broker services.",
  },
  "/feedback-and-complaints": {
    title: "Feedback and Complaints - Nepean Mortgage",
    description: "Submit feedback or complaints about our mortgage broker services. We're committed to resolving any issues and improving our service.",
  },
};

const DirectSEO: React.FC<DirectSEOProps> = ({
  title,
  description,
  path = "/",
  ogImage,
}) => {
  useEffect(() => {
    const pageData = PAGE_DATA[path as keyof typeof PAGE_DATA] || PAGE_DATA["/"];
    const finalTitle = title || pageData.title;
    const finalDescription = description || pageData.description;
    const canonicalUrl = `https://nepeanmortgage.com.au${path === "/" ? "" : path}`;
    
    const baseUrl = import.meta.env.PROD 
      ? "https://nepeanmortgage.com.au" 
      : window.location.origin;
    const defaultOgImage = ogImage || `${baseUrl}/images/og-facebook.jpg`;
    const twitterImage = `${baseUrl}/images/og-twitter.jpg`;

    document.title = finalTitle;

    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', href);
    };

    updateMetaTag('description', finalDescription);
    updateLinkTag('canonical', canonicalUrl);

    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'Nepean Mortgage', true);
    updateMetaTag('og:image', defaultOgImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', 'Nepean Mortgage - Expert Mortgage Broker Services', true);
    updateMetaTag('og:image:type', 'image/jpeg', true);
    updateMetaTag('og:image:secure_url', defaultOgImage, true);
    updateMetaTag('og:locale', 'en_AU', true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', twitterImage);
    updateMetaTag('twitter:image:alt', 'Nepean Mortgage - Expert Mortgage Broker Services');

  }, [title, description, path, ogImage]);

  return null;
};

export default DirectSEO;