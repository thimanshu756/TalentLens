import { Metadata } from 'next';

// ============================================================================
// PAGE-SPECIFIC METADATA (SERVICES PAGE)
// ============================================================================
// This metadata extends the root layout metadata
// The title will use the template: "Services | Rakri AI"
export const metadata: Metadata = {
  // Using string title to leverage the template from layout.tsx
  // This will render as: "Services | Rakri AI"
  title: 'Services',

  // Page-specific description optimized for services page
  description: 'Discover our AI-powered recruitment services: GDPR-compliant candidate screening, explainable AI scoring, cloud-hosted solutions, and 75% faster hiring processes for European and US agencies.',

  // Page-specific keywords for services
  keywords: [
    'AI recruitment services',
    'candidate screening services',
    'GDPR recruitment',
    'cloud recruitment platform',
    'AI hiring solutions',
    'recruitment automation',
  ],

  // Page-specific Open Graph metadata
  openGraph: {
    title: 'Services | Rakri AI',
    description: 'AI-powered recruitment services: GDPR-compliant candidate screening, explainable AI scoring, and 75% faster hiring processes.',
    url: 'https://rakriai.com/services', // REPLACE_ME: Update with your domain
    type: 'website',
    images: [
      {
        url: 'https://rakriai.com/og-services.png', // REPLACE_ME: Create services page specific OG image
        width: 1200,
        height: 630,
        alt: 'Rakri AI Services - AI-Powered Recruitment Solutions',
      },
    ],
  },

  // Page-specific Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Rakri AI',
    description: 'AI-powered recruitment services: GDPR-compliant candidate screening and 75% faster hiring.',
    images: ['https://rakriai.com/og-services.png'], // REPLACE_ME: Update with your domain
  },
};

export default function ServicesPage() {
  // ============================================================================
  // JSON-LD STRUCTURED DATA - BREADCRUMB LIST SCHEMA
  // ============================================================================
  // Breadcrumbs help users and search engines understand site hierarchy
  // They appear in Google search results as clickable navigation paths
  // Learn more: https://schema.org/BreadcrumbList

  const breadcrumbSchema = {
    '@context': 'https://schema.org', // Schema.org vocabulary
    '@type': 'BreadcrumbList', // Type for navigation breadcrumbs

    // Array of breadcrumb items showing the navigation path
    itemListElement: [
      {
        '@type': 'ListItem', // Each breadcrumb is a ListItem
        position: 1, // First item in the breadcrumb trail (must start at 1)
        name: 'Home', // Display text for this breadcrumb
        item: 'https://rakriai.com', // REPLACE_ME: URL for home page
      },
      {
        '@type': 'ListItem',
        position: 2, // Second item in the breadcrumb trail
        name: 'Services', // Display text for this breadcrumb
        item: 'https://rakriai.com/services', // REPLACE_ME: URL for services page (current page)
      },
      // Add more breadcrumb levels if you have nested pages:
      // {
      //   '@type': 'ListItem',
      //   position: 3,
      //   name: 'AI Screening',
      //   item: 'https://rakriai.com/services/ai-screening',
      // },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data - Breadcrumb Navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escape < characters to prevent XSS attacks
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* Page Content */}
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            {/* Visible Breadcrumb Navigation (optional but recommended) */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li aria-current="page" className="font-semibold">
                  Services
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl">
              Transform your hiring process with AI-powered recruitment
              solutions that are GDPR-compliant, explainable, and 75% faster.
            </p>
          </div>
        </section>

        {/* Services Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold mb-4">
                  AI Candidate Screening
                </h2>
                <p className="text-gray-600 mb-4">
                  Intelligent candidate evaluation with explainable AI scoring
                  that reduces screening time by 75% while maintaining
                  compliance.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Learn more →
                </a>
              </div>

              {/* Service Card 2 */}
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold mb-4">
                  GDPR-Compliant Platform
                </h2>
                <p className="text-gray-600 mb-4">
                  Fully compliant recruitment solution hosted securely on your
                  cloud infrastructure with complete data sovereignty.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Learn more →
                </a>
              </div>

              {/* Service Card 3 */}
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold mb-4">
                  Cloud-Hosted Solutions
                </h2>
                <p className="text-gray-600 mb-4">
                  Deploy on your preferred cloud infrastructure with enterprise
                  security, scalability, and full control over your data.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get started with our AI-powered recruitment platform and
              experience 75% faster candidate screening.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
