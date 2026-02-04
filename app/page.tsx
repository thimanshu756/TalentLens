import { Metadata } from 'next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ValueProposition from './components/sections/ValueProposition';
import AboutUs from './components/sections/AboutUs';
import HowWeHelp from './components/sections/HowWeHelp';
import FinalCTA from './components/sections/FinalCTA';
import TrustBar from './components/sections/TrustBar';

// ============================================================================
// PAGE-SPECIFIC METADATA (HOME PAGE)
// ============================================================================
// This metadata extends and overrides the root layout metadata
// The title will use the template from layout.tsx if not using 'default' key
export const metadata: Metadata = {
  // Using the default key to override the entire title (no template applied)
  title: 'Rakri AI | Secure Enterprise AI Infrastructure & Integration',

  // Page-specific description optimized for home page
  description: 'Accelerate your business transformation with Rakri AI. We provide secure, GDPR-compliant AI infrastructure and seamless integration strategies for scaling enterprises.',

  // Page-specific Open Graph metadata for social sharing
  openGraph: {
    title: 'Rakri AI | Secure Enterprise AI Infrastructure & Integration',
    description: 'Build your private AI backbone. Secure infrastructure, custom model integration, and full data sovereignty for modern enterprises.',
    url: 'https://rakriai.com', // REPLACE_ME: Update with your domain
    type: 'website',
    images: [
      {
        url: '/assets/landing/Rakri_OG_IMG.png',
        width: 1200,
        height: 630,
        alt: 'Rakri AI - Enterprise AI Infrastructure',
      },
    ],
  },

  // Page-specific Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Rakri AI | Secure Enterprise AI Infrastructure & Integration',
    description: 'Build your private AI backbone. Secure, scalable, and GDPR-compliant.',
    images: ['/assets/landing/Rakri_OG_IMG.png'],
  },
};

export default function Home() {
  // ============================================================================
  // JSON-LD STRUCTURED DATA - ORGANIZATION SCHEMA
  // ============================================================================
  // This helps search engines understand your business entity
  // Learn more: https://schema.org/Organization

  const organizationSchema = {
    '@context': 'https://schema.org', // Schema.org vocabulary
    '@type': 'Organization', // Type of entity (Organization, LocalBusiness, Corporation, etc.)

    // Basic company information
    name: 'Rakri AI', // REPLACE_ME: Your company name
    description: 'Enterprise-grade AI infrastructure provider delivering secure, GDPR-compliant AI integration and managed pipelines for scaling businesses.',
    url: 'https://rakriai.com', // REPLACE_ME: Your website URL

    // Company logo (appears in Google Knowledge Panel)
    logo: 'https://rakriai.com/logo.png', // REPLACE_ME: URL to your logo (recommended: 112x112px minimum)

    // Contact information for customer support
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service', // Type: sales, customer service, technical support, billing, etc.
      email: 'REPLACE_ME_connect@rakriai.com', // REPLACE_ME: Your contact email
      availableLanguage: ['English'], // Languages your support team speaks
      areaServed: ['US', 'EU'], // REPLACE_ME: Geographic areas you serve (ISO country codes)
    },

    // Social media profiles (helps establish brand identity)
    sameAs: [
      'https://twitter.com/REPLACE_ME_HANDLE', // REPLACE_ME: Your Twitter/X profile
      'https://www.linkedin.com/company/REPLACE_ME', // REPLACE_ME: Your LinkedIn company page
      'https://github.com/REPLACE_ME', // REPLACE_ME: Your GitHub organization (if applicable)
      // Add more social profiles as needed:
      // 'https://www.facebook.com/REPLACE_ME',
      // 'https://www.instagram.com/REPLACE_ME',
      // 'https://www.youtube.com/@REPLACE_ME',
    ],

    // Optional: Founding date and location
    // foundingDate: '2024-01-01', // REPLACE_ME: Your founding date (YYYY-MM-DD format)
    // address: {
    //   '@type': 'PostalAddress',
    //   streetAddress: 'REPLACE_ME: 123 Main Street',
    //   addressLocality: 'REPLACE_ME: City',
    //   addressRegion: 'REPLACE_ME: State/Province',
    //   postalCode: 'REPLACE_ME: 12345',
    //   addressCountry: 'REPLACE_ME: US',
    // },
  };

  return (
    <>
      {/* JSON-LD Structured Data - Injected into page head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escape < characters to prevent XSS attacks
          __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
        }}
      />

      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <AboutUs />
        <HowWeHelp />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
