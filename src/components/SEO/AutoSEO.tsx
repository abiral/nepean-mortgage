import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import seoData from '../../data/seo-data.json';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

const AutoSEO: React.FC = () => {
  const location = useLocation();
  
  // Get SEO data for current route, fallback to home page
  const currentPath = location.pathname;
  const pageData: SEOData = (seoData as Record<string, SEOData>)[currentPath] || (seoData as Record<string, SEOData>)['/'];
  
  const canonicalUrl = `https://nepeanmortgage.com.au${currentPath === '/' ? '' : currentPath}`;
  const twitterImage = 'https://nepeanmortgage.com.au/images/og-twitter.jpg';

  return (
    <Helmet>
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.description} />
      <meta name="keywords" content={pageData.keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageData.title} />
      <meta property="og:description" content={pageData.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Nepean Mortgage" />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:image" content={pageData.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Nepean Mortgage - Expert Mortgage Broker Services" />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageData.title} />
      <meta name="twitter:description" content={pageData.description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:image:alt" content="Nepean Mortgage - Expert Mortgage Broker Services" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Nepean Mortgage" />
    </Helmet>
  );
};

export default AutoSEO;