'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Award, Lock, ShieldCheck, Users } from 'lucide-react';

export default function TrustBar() {
  const trustPoints = [
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />,
      title: 'Committed to GDPR & Data Privacy',
      description: 'We host all data within your cloud to uphold strict EU data laws and safeguard proprietary business information.',
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />,
      title: 'Expert-Led Implementation',
      description: 'Our team aligns with European business hours (CET) for seamless communication and personalized implementation support.',
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />,
      title: 'Proven Infrastructure ROI',
      description: 'Our AI solutions help clients reduce operational costs and accelerate digital transformation initiatives.',
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />,
      title: 'Security & Compliance First',
      description: 'Comprehensive security protocols to protect your data and ensure operational continuity.',
    },
  ];


  return (
    <Section background="navy">
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2"
        >
          Why Enterprises{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
            Trust
          </span>{' '}
          Rakri AI
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {trustPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex gap-4 sm:gap-5 p-6 sm:p-8 bg-slate-gray/5 rounded-2xl border border-slate-gray/20 hover:border-electric-blue/50 hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300 group overflow-hidden"
          >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/0 to-accent-hover/0 group-hover:from-electric-blue/5 group-hover:to-accent-hover/5 transition-all duration-500 rounded-2xl" />

            <div className="flex-shrink-0 relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-electric-blue/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-electric-blue/20">
                <div className="text-electric-blue group-hover:text-white transition-colors duration-300">
                  {point.icon}
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3 group-hover:text-electric-blue transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
