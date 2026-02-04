import { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OfferingHero from '../components/sections/offering/OfferingHero';
import WhyRakri from '../components/sections/offering/WhyRakri';
import KeyBenefits from '../components/sections/offering/KeyBenefits';
import Features from '../components/sections/offering/Features';
import HowItWorks from '../components/sections/offering/HowItWorks';
import PricingROI from '../components/sections/offering/PricingROI';
import FAQ from '../components/sections/offering/FAQ';
import CTASection from '../components/sections/offering/CTASection';

export const metadata: Metadata = {
  title: 'Enterprise AI Solutions | Rakri AI',
  description: 'Comprehensive AI infrastructure solutions. From custom model training to secure hosting, we help you build your enterprise AI backbone.',
};

export default function OfferingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <OfferingHero />
        <WhyRakri />
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
