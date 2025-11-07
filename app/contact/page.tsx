import { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactHero from '../components/sections/contact/ContactHero';
import ContactForm from '../components/sections/contact/ContactForm';
import ContactInfo from '../components/sections/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | TalentLens AI',
  description: 'Get in touch with TalentLens AI. Book a demo or contact our team to learn how we can transform your recruitment process with AI.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ContactHero />
        <section className="relative bg-gradient-to-b from-navy-dark via-[#0F1729] to-navy-dark py-16 sm:py-20 md:py-24">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-hover/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Form Section - Takes 3 columns */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Info Section - Takes 2 columns */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
