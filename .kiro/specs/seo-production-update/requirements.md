# Requirements Document

## Introduction

The Nepean Mortgage website is currently showing outdated "Coming Soon" content in Google search results instead of the proper production content. The search results display "Nepean Mortgage - Coming Soon" with a description mentioning "Development Progress 75%" which is inappropriate for a live production website. This needs to be updated to show professional mortgage broker content that accurately represents the business and improves search engine visibility.

## Requirements

### Requirement 1

**User Story:** As a potential customer searching for "nepean mortgage australia" on Google, I want to see professional and relevant search results that accurately describe the mortgage broker services, so that I can understand what services are offered and be encouraged to visit the website.

#### Acceptance Criteria

1. WHEN a user searches for "nepean mortgage australia" on Google THEN the search results SHALL display a professional title without "Coming Soon" text
2. WHEN the search results are displayed THEN the title SHALL be "Expert Mortgage Broker Services in Nepean & Western Sydney - Nepean Mortgage" or similar professional title
3. WHEN the search results are displayed THEN the description SHALL mention specific mortgage services like home loans, refinancing, and competitive rates
4. WHEN the search results are displayed THEN the description SHALL NOT contain any development-related text like "Development Progress" or "Stay Tuned"

### Requirement 2

**User Story:** As a website owner, I want to ensure that search engines are indexing the correct meta tags and content from my production website, so that my business appears professionally in search results and attracts potential customers.

#### Acceptance Criteria

1. WHEN search engines crawl the website THEN the HTML SHALL contain proper meta title tags with professional content
2. WHEN search engines crawl the website THEN the HTML SHALL contain proper meta description tags describing mortgage broker services
3. WHEN the website loads THEN the SEO meta tags SHALL be dynamically generated from API data and configuration files
4. WHEN API data is not available THEN the website SHALL fall back to professional default meta tags from the SEO configuration
5. WHEN the page loads THEN there SHALL be no "Coming Soon" or development-related content in the meta tags

### Requirement 3

**User Story:** As a business owner, I want to have control over the exact title and description that appears in Google search results, so that I can optimize for search engine visibility and ensure the content accurately represents my mortgage broker services.

#### Acceptance Criteria

1. WHEN configuring SEO settings THEN I SHALL be able to set custom title and description overrides for the home page
2. WHEN custom overrides are set THEN they SHALL take precedence over API-generated content
3. WHEN no custom overrides are set THEN the system SHALL generate professional content from API data and fallback to default professional content
4. WHEN updating SEO overrides THEN the changes SHALL be immediately reflected in the HTML meta tags

### Requirement 4

**User Story:** As a website administrator, I want to ensure that Google and other search engines re-index the updated content quickly, so that the improved search results appear as soon as possible.

#### Acceptance Criteria

1. WHEN SEO content is updated THEN the website SHALL include proper canonical URLs
2. WHEN the website is crawled THEN it SHALL return appropriate HTTP status codes (200 for valid pages)
3. WHEN SEO updates are made THEN there SHALL be a way to request re-indexing from search engines
4. WHEN the sitemap is generated THEN it SHALL include the correct URLs with updated lastModified dates
