import { MetadataRoute } from 'next';

// ============================================================================
// SITEMAP CONFIGURATION
// ============================================================================
// This file generates an XML sitemap for search engines to discover your pages
// Learn more: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

/**
 * Generates the sitemap for the website
 * @returns Array of URL objects with SEO metadata
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // REPLACE_ME: Update baseUrl with your actual domain
  const baseUrl = 'https://rakriai.com';

  // Get current date for lastModified (indicates freshness to search engines)
  const currentDate = new Date();

  return [
    // ========================================================================
    // HOME PAGE
    // ========================================================================
    {
      url: baseUrl, // Root URL of your site
      lastModified: currentDate, // When this page was last updated
      changeFrequency: 'weekly', // How often this page changes (yearly|monthly|weekly|daily|always|hourly|never)
      priority: 1.0, // Priority relative to other pages (0.0 to 1.0, default 0.5)
    },

    // ========================================================================
    // SERVICES PAGE
    // ========================================================================
    {
      url: `${baseUrl}/services`, // REPLACE_ME: Adjust route if different
      lastModified: currentDate,
      changeFrequency: 'monthly', // Service pages typically change less frequently
      priority: 0.9, // High priority - important conversion page
    },

    // ========================================================================
    // ABOUT PAGE
    // ========================================================================
    {
      url: `${baseUrl}/about`, // REPLACE_ME: Adjust route if different
      lastModified: currentDate,
      changeFrequency: 'monthly', // About pages rarely change
      priority: 0.7, // Medium-high priority
    },

    // ========================================================================
    // CONTACT PAGE
    // ========================================================================
    {
      url: `${baseUrl}/contact`, // REPLACE_ME: Adjust route if different
      lastModified: currentDate,
      changeFrequency: 'yearly', // Contact info rarely changes
      priority: 0.8, // High priority - important conversion page
    },

    // ========================================================================
    // OFFERING PAGE
    // ========================================================================
    {
      url: `${baseUrl}/offering`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9, // High priority - main product page
    },

    // ========================================================================
    // LEGAL PAGES
    // ========================================================================
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2025-01-17'), // Update when policy changes
      changeFrequency: 'yearly',
      priority: 0.3, // Lower priority but important for compliance
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2025-01-17'), // Update when terms change
      changeFrequency: 'yearly',
      priority: 0.3, // Lower priority but important for compliance
    },

    // ========================================================================
    // ADDITIONAL PAGES (Uncomment and modify as needed)
    // ========================================================================
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: currentDate,
    //   changeFrequency: 'daily', // Blog index changes frequently
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/pricing`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/case-studies`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },

    // ========================================================================
    // DYNAMIC PAGES (Example for blog posts, products, etc.)
    // ========================================================================
    // For dynamic content, you would typically fetch from a database/CMS:
    //
    // ...blogPosts.map((post) => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.6,
    // })),
    //
    // ...products.map((product) => ({
    //   url: `${baseUrl}/products/${product.slug}`,
    //   lastModified: new Date(product.updatedAt),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.7,
    // })),
  ];
}

// ============================================================================
// PRIORITY GUIDELINES
// ============================================================================
// 1.0 - Homepage (most important)
// 0.8-0.9 - Major landing pages (Services, Pricing, Contact)
// 0.6-0.7 - Secondary pages (About, Blog, Case Studies)
// 0.4-0.5 - Tertiary pages (Individual blog posts, FAQ)
// 0.1-0.3 - Legal pages (Privacy Policy, Terms of Service)

// ============================================================================
// CHANGE FREQUENCY GUIDELINES
// ============================================================================
// always - Very dynamic content (live feeds, real-time data)
// hourly - Frequently updated content (news sites)
// daily - Daily updates (active blogs)
// weekly - Regular updates (company news, product updates)
// monthly - Occasional updates (service pages, about page)
// yearly - Rarely updated (contact info, legal pages)
// never - Archived content

// ============================================================================
// NEXT STEPS
// ============================================================================
// 1. Replace baseUrl with your actual domain
// 2. Verify your routes match your file structure
// 3. Update lastModified dates when content changes
// 4. Add dynamic pages if you have blog posts, products, etc.
// 5. Submit sitemap to Google Search Console: https://search.google.com/search-console
// 6. Submit sitemap to Bing Webmaster Tools: https://www.bing.com/webmasters
// 7. Test your sitemap: Visit https://yourdomain.com/sitemap.xml
