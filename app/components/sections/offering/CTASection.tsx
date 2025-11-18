'use client';

import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import Section from '../../ui/Section';

export default function CTASection() {
  return (
    <Section background="slate">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-gradient-to-br from-electric-blue/10 via-navy-dark/50 to-accent-hover/10 backdrop-blur-sm p-12 md:p-16 rounded-3xl border border-electric-blue/20 shadow-2xl"
      >
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-hover/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
          >
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
              Revolutionize
            </span>{' '}
            Your Recruitment?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed"
          >
            Join leading European recruitment agencies using Rakri AI to
            screen candidates faster, smarter, and with complete GDPR compliance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button calLink="rakri-ai-vhtois/15min" variant="primary">
              Book a Demo
            </Button>
            <a
              href="/contact"
              className="text-electric-blue hover:text-accent-hover transition-colors duration-200 font-semibold"
            >
              Contact Us →
            </a>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
