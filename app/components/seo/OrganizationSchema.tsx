/**
 * Organization Schema Markup (JSON-LD)
 * Helps search engines understand your business and display rich results
 * Learn more: https://schema.org/Organization
 */

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rakri AI',
    alternateName: 'Rakri',
    url: 'https://rakriai.com',
    logo: 'https://rakriai.com/assets/logo.png',
    description: 'AI-powered GDPR-compliant recruitment platform specializing in candidate screening automation for European and US recruitment agencies.',

    // Contact Information
    email: 'connect@rakriai.com',

    // Business Details
    foundingDate: '2024',

    // Service Area
    areaServed: [
      {
        '@type': 'Place',
        name: 'European Union'
      },
      {
        '@type': 'Place',
        name: 'United States'
      }
    ],

    // Services Offered
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Recruitment Technology',
      'HR Technology',
      'GDPR Compliance',
      'Candidate Screening',
      'Applicant Tracking'
    ],

    // Social Media
    sameAs: [
      'https://www.linkedin.com/company/rakriai',
      'https://twitter.com/rakriai'
    ],

    // Legal Pages
    termsOfService: 'https://rakriai.com/terms-of-service',
    privacyPolicy: 'https://rakriai.com/privacy-policy',

    // Main Service
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Recruitment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Candidate Screening',
            description: 'Automated resume parsing and candidate evaluation using explainable AI',
            provider: {
              '@type': 'Organization',
              name: 'Rakri AI'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GDPR-Compliant Recruitment Platform',
            description: 'Client-hosted recruitment automation with full data control and compliance',
            provider: {
              '@type': 'Organization',
              name: 'Rakri AI'
            }
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
