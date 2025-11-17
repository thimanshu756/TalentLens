'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, FileCheck, AlertTriangle, Users, CreditCard, Shield, ChevronDown, ChevronRight, Mail, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import Container from '../../ui/Container';
import { termsOfServiceContent } from '../../../../content/terms-of-service';

export default function TermsOfServiceContent() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const renderContentBlock = (block: any, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-text-secondary leading-relaxed mb-4">
            {block.text}
          </p>
        );

      case 'subsection':
        return (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-semibold text-electric-blue mb-3 flex items-center">
              <ChevronRight className="w-5 h-5 mr-2" />
              {block.title}
            </h4>
            {block.text && (
              <p className="text-text-secondary leading-relaxed mb-4">{block.text}</p>
            )}
          </div>
        );

      case 'list':
        return (
          <ul key={index} className="space-y-3 mb-6 ml-6">
            {block.items.map((item: string, i: number) => (
              <li key={i} className="text-text-secondary leading-relaxed flex items-start">
                <CheckCircle2 className="w-5 h-5 text-electric-blue mr-3 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'important':
        return (
          <div key={index} className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-text-primary leading-relaxed font-semibold whitespace-pre-line">
                  {block.text}
                </p>
              </div>
            </div>
          </div>
        );

      case 'contact-info':
        return (
          <div key={index} className="bg-[#0F1729] rounded-lg p-6 mb-6 border border-slate-gray/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {block.items.map((item: any, i: number) => (
                <div key={i} className="flex flex-col">
                  <span className="text-slate-gray text-sm mb-1">{item.label}</span>
                  <span className="text-text-primary font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'definition-list':
        return (
          <div key={index} className="space-y-4 mb-6">
            {block.items.map((item: any, i: number) => (
              <div key={i} className="bg-[#0F1729] rounded-lg p-5 border border-slate-gray/20">
                <dt className="text-electric-blue font-semibold mb-2">{item.term}</dt>
                <dd className="text-text-secondary leading-relaxed">{item.definition}</dd>
              </div>
            ))}
          </div>
        );

      case 'pricing-table':
        return (
          <div key={index} className="space-y-4 mb-6">
            {block.items.map((item: any, i: number) => (
              <div key={i} className="bg-gradient-to-r from-electric-blue/5 to-accent-hover/5 rounded-lg p-6 border border-electric-blue/20">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                  <h5 className="text-lg font-bold text-electric-blue">{item.tier}</h5>
                  <span className="text-xl font-bold text-text-primary">{item.price}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-navy-dark via-[#0F1729] to-navy-dark">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-hover/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 border-b border-slate-gray/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/10 rounded-2xl mb-6">
              <Scale className="w-8 h-8 text-electric-blue" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-text-primary">
              Terms of Service
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Please read these terms carefully before using Rakri AI's services.
              By using our platform, you agree to be bound by these terms.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary">
              <div className="flex items-center">
                <FileCheck className="w-4 h-4 mr-2 text-electric-blue" />
                Legally Binding
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-electric-blue" />
                Fair & Transparent
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-electric-blue" />
                Last Updated: {termsOfServiceContent.lastUpdated}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Acceptance Notice */}
      <section className="relative py-8 border-b border-slate-gray/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-electric-blue/10 border border-electric-blue/30 rounded-xl p-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-electric-blue mr-3 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Important Notice
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    By accessing or using Rakri AI's services, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms of Service. If you do not agree
                    with any part of these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="relative py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="lg:sticky lg:top-24 bg-[#0F1729] rounded-xl p-6 border border-slate-gray/20">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <FileCheck className="w-5 h-5 mr-2 text-electric-blue" />
                  Table of Contents
                </h3>
                <nav className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
                  {termsOfServiceContent.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30'
                          : 'text-text-secondary hover:bg-slate-gray/10 hover:text-text-primary'
                      }`}
                    >
                      <span className="text-sm font-medium block truncate">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>

                {/* Quick Contact */}
                <div className="mt-6 pt-6 border-t border-slate-gray/20">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">
                    Legal Questions?
                  </h4>
                  <a
                    href="mailto:connect@rakriai.com"
                    className="flex items-center text-sm text-electric-blue hover:text-accent-hover transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    connect@rakriai.com
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-8"
            >
              <div className="space-y-8">
                {termsOfServiceContent.sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="bg-[#0F1729] rounded-xl p-6 sm:p-8 border border-slate-gray/20 scroll-mt-24"
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-start justify-between mb-6 group"
                    >
                      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary text-left flex-1 group-hover:text-electric-blue transition-colors">
                        {section.title}
                      </h2>
                      <motion.div
                        animate={{ rotate: expandedSections.includes(section.id) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 flex-shrink-0"
                      >
                        <ChevronDown className="w-6 h-6 text-slate-gray group-hover:text-electric-blue transition-colors" />
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedSections.includes(section.id) ? 'auto' : 0,
                        opacity: expandedSections.includes(section.id) ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4">
                        {section.content.map((block, index) => renderContentBlock(block, index))}
                      </div>
                    </motion.div>

                    {!expandedSections.includes(section.id) && (
                      <p className="text-text-secondary text-sm italic">
                        Click to expand this section
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-12 bg-gradient-to-r from-electric-blue/10 to-accent-hover/10 rounded-xl p-8 border border-electric-blue/30">
                <div className="text-center">
                  <Info className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    Questions About Our Terms?
                  </h3>
                  <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                    We're committed to transparency and fairness. If you have questions about these
                    terms or need clarification on any provision, please reach out to us.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="mailto:connect@rakriai.com"
                      className="inline-flex items-center px-6 py-3 bg-electric-blue hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Legal Team
                    </a>
                    <a
                      href="/privacy-policy"
                      className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-slate-gray/10 text-electric-blue border border-electric-blue font-semibold rounded-lg transition-colors duration-200"
                    >
                      View Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Print Version Notice */}
      <section className="relative py-8 border-t border-slate-gray/20">
        <Container>
          <div className="text-center text-sm text-text-secondary">
            <p>
              These terms are effective as of {termsOfServiceContent.effectiveDate}.{' '}
              <button
                onClick={() => window.print()}
                className="text-electric-blue hover:text-accent-hover underline"
              >
                Print this page
              </button>{' '}
              for your records.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
