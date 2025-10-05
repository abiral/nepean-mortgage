import React from "react";
import { Helmet } from "react-helmet-async";
import { useApi } from "../../hooks/useApi";
import {
    generatePageSEO,
    generateOpenGraphDataWithImages,
    generateTwitterCardDataWithImages,
    generateLocalBusinessSchema,
    generateFAQSchema,
} from "../../utils/seo";
import type { SEOPageData, StructuredDataObject } from "../../types/seo";

interface SEOHeadProps {
    pageKey: string;
    customSEO?: Partial<SEOPageData>;
    includeLocalBusiness?: boolean;
    includeFAQ?: boolean;
    additionalStructuredData?: StructuredDataObject[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
    pageKey,
    customSEO,
    includeLocalBusiness = false,
    includeFAQ = false,
    additionalStructuredData = [],
}) => {
    const { data: apiData } = useApi();

    // Don't render SEO if API data is not available yet
    if (!apiData) {
        return (
            <Helmet>
                <title>Loading...</title>
            </Helmet>
        );
    }

    // Generate SEO data from API
    const seoData = generatePageSEO(pageKey, apiData, customSEO);
    const openGraphData = generateOpenGraphDataWithImages(
        seoData,
        apiData,
        // pageKey
    );
    const twitterCardData = generateTwitterCardDataWithImages(
        seoData,
        // apiData,
        // pageKey
    );

    // Generate structured data
    const structuredData: StructuredDataObject[] = [...additionalStructuredData];

    if (includeLocalBusiness) {
        structuredData.push(generateLocalBusinessSchema(apiData));
    }

    if (includeFAQ && apiData.faq?.items?.length > 0) {
        structuredData.push(generateFAQSchema(apiData));
    }

    // Add any custom structured data from seoData
    if (seoData.structuredData) {
        structuredData.push(...seoData.structuredData);
    }

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{seoData.title}</title>
            <meta name="description" content={seoData.description} />
            <meta name="keywords" content={seoData.keywords.join(", ")} />

            {/* Canonical URL */}
            {seoData.canonicalUrl && (
                <link rel="canonical" href={seoData.canonicalUrl} />
            )}

            {/* Robots */}
            <meta
                name="robots"
                content={`${seoData.noIndex ? "noindex" : "index"}, ${seoData.noFollow ? "nofollow" : "follow"
                    }`}
            />

            {/* Open Graph Tags */}
            {Object.entries(openGraphData).map(([property, content]) => (
                <meta key={property} property={property} content={content} />
            ))}

            {/* Twitter Card Tags */}
            {Object.entries(twitterCardData).map(([name, content]) => (
                <meta key={name} name={name} content={content} />
            ))}

            {/* Additional Meta Tags */}
            <meta name="author" content={apiData.name} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="AU-NSW" />
            <meta name="geo.placename" content="Nepean, NSW, Australia" />

            {/* Structured Data */}
            {structuredData.map((data, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
                />
            ))}
        </Helmet>
    );
};

export default SEOHead;
