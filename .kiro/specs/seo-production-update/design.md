# Design Document

## Overview

The SEO production content update will address the Google search results issue by ensuring proper meta tags are set, providing fallback mechanisms when API data is unavailable, and implementing custom overrides for production-ready content. The solution will work within the existing SEO architecture while adding safeguards and production-ready defaults.

## Architecture

The current SEO system uses a multi-layered approach:

1. **API Data Layer**: Dynamic content from the backend API
2. **Configuration Layer**: Static SEO settings and overrides from JSON files
3. **Generation Layer**: SEO utility functions that combine API data with configuration
4. **Component Layer**: React components that render meta tags using react-helmet-async

The design will enhance this architecture by:

- Adding production-ready fallbacks at each layer
- Implementing custom override capabilities
- Ensuring meta tags are always present even when API fails
- Providing immediate solutions for the current Google indexing issue

## Components and Interfaces

### 1. SEO Configuration Updates

**File**: `src/data/page-seo-overrides.json`

- Update home page overrides with production-ready content
- Set explicit title and description that will appear in Google search results
- Ensure no development-related content is present

**File**: `src/data/seo-settings.json`

- Update fallback content to be production-ready
- Ensure all default values are professional and business-appropriate

### 2. SEO Component Enhancements

**File**: `src/components/SEO/SEOHead.tsx`

- Add better error handling for API data loading
- Implement immediate fallback to production defaults when API is unavailable
- Add loading state management to prevent empty meta tags during API calls

### 3. Meta Tag Validation

**File**: `src/utils/seo.ts`

- Add validation functions to ensure meta tags meet production standards
- Implement content sanitization to remove any development-related text
- Add logging for SEO debugging in development

### 4. HTML Template Updates

**File**: `index.html`

- Add static fallback meta tags in the HTML template as a last resort
- Ensure basic SEO is present even before JavaScript loads

## Data Models

### SEO Override Structure

```typescript
interface SEOOverride {
  titleOverride: string; // Custom title for search results
  descriptionOverride: string; // Custom description for search results
  keywordOverrides: string[]; // Custom keywords
  h1Override: string; // Custom H1 tag
  ogImageOverride: string; // Custom Open Graph image
  twitterImageOverride: string; // Custom Twitter image
  priority: number; // Sitemap priority
  changeFreq: string; // Sitemap change frequency
}
```

### Production Content Defaults

```typescript
interface ProductionDefaults {
  title: string; // Professional title without "Coming Soon"
  description: string; // Business-focused description
  keywords: string[]; // Mortgage industry keywords
  businessName: string; // Official business name
  serviceDescription: string; // Core service offering description
}
```

## Error Handling

### API Failure Scenarios

1. **API Completely Unavailable**: Fall back to static configuration defaults
2. **Partial API Data**: Use available data and fill gaps with defaults
3. **Invalid API Data**: Sanitize and validate, use defaults for invalid fields
4. **Slow API Response**: Show loading state briefly, then fall back to defaults

### Content Validation

1. **Development Text Detection**: Scan for phrases like "Coming Soon", "Development Progress", "Stay Tuned"
2. **Length Validation**: Ensure titles are 30-60 characters, descriptions are 120-160 characters
3. **Professional Content Check**: Validate that content is business-appropriate

### Fallback Hierarchy

1. Custom overrides (highest priority)
2. API-generated content
3. Configuration defaults
4. Hard-coded production fallbacks (lowest priority)

## Testing Strategy

### Unit Tests

- Test SEO utility functions with various API data scenarios
- Test content validation and sanitization functions
- Test fallback mechanisms when API data is missing or invalid

### Integration Tests

- Test SEO component rendering with different data states
- Test meta tag generation with various API response scenarios
- Test override functionality and precedence

### Manual Testing

- Verify meta tags in browser developer tools
- Test with Google's Rich Results Test tool
- Validate Open Graph tags with Facebook's Sharing Debugger
- Check Twitter Card validation

### Production Verification

- Use Google Search Console to monitor indexing
- Verify search results appearance after deployment
- Monitor for any remaining development-related content in search results

## Implementation Approach

### Phase 1: Immediate Fix

1. Update page overrides with production-ready content
2. Set explicit title and description for home page
3. Deploy changes to fix current Google search results

### Phase 2: Robustness Improvements

1. Enhance SEO component error handling
2. Add content validation and sanitization
3. Implement better fallback mechanisms

### Phase 3: Monitoring and Optimization

1. Add SEO debugging tools
2. Implement search result monitoring
3. Set up alerts for SEO issues

## Success Criteria

1. **Google Search Results**: "nepean mortgage australia" shows professional title and description
2. **Meta Tag Presence**: All pages have proper meta tags even when API fails
3. **Content Quality**: No development-related text appears in any meta tags
4. **Search Engine Compatibility**: Proper structured data and Open Graph tags
5. **Performance**: SEO meta tags load quickly without blocking page render
