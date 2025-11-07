'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

export default function ValueProposition() {
  const values = [
    {
      emoji: '⚡',
      title: 'Accelerate Screening',
      description: 'Reduce manual screening time by up to 75%, enabling quicker candidate shortlists.',
    },
    {
      emoji: '🎯',
      title: 'Accurate Candidate Matching',
      description: 'AI-driven scoring aligns candidates precisely with job requirements.',
    },
    {
      emoji: '💡',
      title: 'Explainable AI Insights',
      description: 'AI-generated reasoning allows recruiters to understand every shortlisting decision.',
    },
    {
      emoji: '🌍',
      title: 'Localized for Europe & US',
      description: 'Designed to comply with GDPR and tailored to meet market-specific hiring norms.',
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
          Why{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
            TalentLens AI
          </span>{' '}
          is the Future of Recruitment
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center group p-6 sm:p-8 bg-navy-dark/30 rounded-2xl border border-slate-gray/20 hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 transform transition-transform group-hover:scale-110">
              {value.emoji}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3 sm:mb-4">
              {value.title}
            </h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
