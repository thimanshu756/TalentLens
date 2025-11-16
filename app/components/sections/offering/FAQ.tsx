'use client';

import { motion } from 'framer-motion';
import Section from '../../ui/Section';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is my candidate data secure and GDPR-compliant?',
      answer:
        'Yes, all data is hosted securely within your Cloud environment under your control. We implement enterprise-grade security measures and ensure full GDPR compliance. You maintain complete ownership and auditability of all candidate data, with comprehensive encryption both in transit and at rest.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      question: 'How quickly can this be integrated with our existing systems?',
      answer:
        'Typically within 3-5 weeks, with minimal disruption to your current operations. Our integration process is designed to be seamless, working with your existing LinkedIn, WordPress, ATS, or custom career sites. We handle the technical complexity while your team continues normal operations.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      question: 'Can the AI be customized to our specific needs?',
      answer:
        'Absolutely. You can configure scoring thresholds, customize evaluation criteria, and train the AI with your hiring feedback. The system learns from your decisions and adapts to your company culture, values, and specific role requirements over time.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      question: 'Do we need technical resources from our side?',
      answer:
        'No, we handle end-to-end integration and support. Our team manages the Cloud setup, system integration, data migration, and ongoing maintenance. We provide comprehensive training for your recruiters and offer CET-aligned support to ensure smooth operations.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      question: 'What makes your AI explainable and trustworthy?',
      answer:
        'Our AI provides detailed reasoning for every candidate score, showing exactly which qualifications, experience, and skills influenced the evaluation. This transparency allows your recruiters to understand, validate, and override AI decisions when needed, maintaining human oversight.',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      question: 'How does pricing scale with our hiring volume?',
      answer:
        'The AI usage charge of €2-€4 per candidate scored scales with your hiring volume. There are no hidden fees—you only pay for candidates you actually screen. The setup fee is one-time, and optional annual support is fixed regardless of volume.',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <Section background="slate">
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4"
        >
          Questions You{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
            Might Have
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-text-secondary text-base sm:text-lg max-w-3xl mx-auto px-4"
        >
          Clear answers to common questions about Rakri AI
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div
              className={`relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                openIndex === index
                  ? 'bg-navy-dark/50 border-2 border-electric-blue/50 shadow-lg shadow-electric-blue/10'
                  : 'bg-navy-dark/30 border-2 border-slate-gray/20 hover:border-slate-gray/40'
              }`}
            >
              {/* Background Gradient on Open */}
              {openIndex === index && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} opacity-5`}
                />
              )}

              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="relative w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 group"
              >
                <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-electric-blue group-hover:to-accent-hover transition-all duration-300 pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${faq.gradient} flex items-center justify-center text-white transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="relative px-6 sm:px-8 pb-6 sm:pb-8">
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${faq.gradient} mb-4 rounded-full`}
                  />
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Help CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12 sm:mt-16"
      >
        <p className="text-text-secondary text-base sm:text-lg mb-4">
          Still have questions?
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-electric-blue to-accent-hover text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-electric-blue/30 transition-all duration-300 hover:scale-105"
        >
          Get in Touch
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </motion.div>
    </Section>
  );
}
