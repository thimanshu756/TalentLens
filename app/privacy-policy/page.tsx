import { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PrivacyPolicyContent from '../components/sections/legal/PrivacyPolicyContent';
import WebPageSchema from '../components/seo/WebPageSchema';
import OrganizationSchema from '../components/seo/OrganizationSchema';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Rakri AI collects, uses, and protects your personal data. Our GDPR and US privacy law compliant privacy policy explains our commitment to data protection.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | Rakri AI',
    description: 'GDPR and US privacy law compliant privacy policy. Learn how we protect your data.',
    type: 'website',
    url: 'https://rakriai.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <WebPageSchema
        type="PrivacyPolicy"
        title="Privacy Policy - Rakri AI"
        description="Learn how Rakri AI collects, uses, and protects your personal data. GDPR and US privacy law compliant."
        url="https://rakriai.com/privacy-policy"
        datePublished="2025-01-17"
        dateModified="2025-01-17"
        breadcrumbs={[
          { name: 'Home', url: 'https://rakriai.com' },
          { name: 'Privacy Policy', url: 'https://rakriai.com/privacy-policy' }
        ]}
      />
      <OrganizationSchema />
      <Header />
      <main className="pt-20">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}
