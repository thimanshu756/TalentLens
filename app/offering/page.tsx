import { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OfferingHero from '../components/sections/offering/OfferingHero';
import WhyTalentLens from '../components/sections/offering/WhyTalentLens';
import KeyBenefits from '../components/sections/offering/KeyBenefits';
import Features from '../components/sections/offering/Features';
import HowItWorks from '../components/sections/offering/HowItWorks';
import PricingROI from '../components/sections/offering/PricingROI';
import FAQ from '../components/sections/offering/FAQ';
import CTASection from '../components/sections/offering/CTASection';

export const metadata: Metadata = {
  title: 'Our Offering | TalentLens AI',
  description: 'Discover how TalentLens AI revolutionizes recruitment with GDPR-compliant, AI-powered candidate screening. 75%-90% faster screening, bias reduction, and seamless integration.',
};

export default function OfferingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <OfferingHero />
        <WhyTalentLens />
        <KeyBenefits />
        <HowItWorks />
        <Features />
        <PricingROI />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
