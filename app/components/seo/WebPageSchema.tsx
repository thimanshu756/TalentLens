/**
 * WebPage Schema Markup (JSON-LD)
 * Provides structured data about specific pages on your website
 * Learn more: https://schema.org/WebPage
 */

interface WebPageSchemaProps {
  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'TermsOfService' | 'PrivacyPolicy';
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function WebPageSchema({
  type,
  title,
  description,
  url,
  datePublished,
  dateModified,
  breadcrumbs
}: WebPageSchemaProps) {
  const baseSchema: any = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description: description,
    url: url,
    inLanguage: 'en-US',

    // Publisher information
    publisher: {
      '@type': 'Organization',
      name: 'Rakri AI',
      url: 'https://rakriai.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rakriai.com/assets/logo.png'
      }
    },

    // Main entity of the page
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },

    // Dates
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),

    // Breadcrumbs
    ...(breadcrumbs && breadcrumbs.length > 0 && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      }
    })
  };

  // Add specific properties for legal pages
  if (type === 'PrivacyPolicy' || type === 'TermsOfService') {
    baseSchema.isPartOf = {
      '@type': 'WebSite',
      name: 'Rakri AI',
      url: 'https://rakriai.com'
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}
