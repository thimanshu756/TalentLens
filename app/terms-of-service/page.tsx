import { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TermsOfServiceContent from '../components/sections/legal/TermsOfServiceContent';
import WebPageSchema from '../components/seo/WebPageSchema';
import OrganizationSchema from '../components/seo/OrganizationSchema';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read Rakri AI\'s Terms of Service to understand your rights and obligations when using our AI-powered recruitment platform and services.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | Rakri AI',
    description: 'Comprehensive terms governing the use of Rakri AI\'s recruitment platform and services.',
    type: 'website',
    url: 'https://rakriai.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <WebPageSchema
        type="TermsOfService"
        title="Terms of Service - Rakri AI"
        description="Read Rakri AI's Terms of Service to understand your rights and obligations when using our AI-powered recruitment platform."
        url="https://rakriai.com/terms-of-service"
        datePublished="2025-01-17"
        dateModified="2025-01-17"
        breadcrumbs={[
          { name: 'Home', url: 'https://rakriai.com' },
          { name: 'Terms of Service', url: 'https://rakriai.com/terms-of-service' }
        ]}
      />
      <OrganizationSchema />
      <Header />
      <main className="pt-20">
        <TermsOfServiceContent />
      </main>
      <Footer />
    </>
  );
}
