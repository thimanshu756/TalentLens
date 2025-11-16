'use client';

import { motion } from 'framer-motion';
import Container from '../../ui/Container';

export default function ContactHero() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-navy-dark via-[#0F1729] to-navy-dark overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-electric-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent-hover/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
              Touch
            </span>
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed px-4 sm:px-0">
            Ready to transform your recruitment process? Contact us to schedule
            a demo or learn more about Rakri AI.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
