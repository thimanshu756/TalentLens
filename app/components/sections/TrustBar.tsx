'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Award, Lock, ShieldCheck, Users } from 'lucide-react';

export default function TrustBar() {
  const trustPoints = [
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />,

      // same GDPR shield icon
      title: 'Committed to GDPR & Data Privacy',
      description: 'We host all data within your Azure cloud to uphold strict EU data laws and safeguard candidate information.',
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />,
      title: 'Expert-Led Development & Support',
      description: 'Our team aligns with European business hours (CET) for seamless communication and personalized assistance.',
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />,
      title: 'Proven Results & ROI',
      description: 'Our AI solutions have helped clients increase hiring speed by up to 75%, improving recruitment efficiency.',
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
          Why Recruiters{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
            Trust
          </span>{' '}
          TalentLens AI
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
            className="flex gap-4 sm:gap-5 p-6 sm:p-8 bg-slate-gray/5 rounded-2xl border border-slate-gray/20 hover:border-electric-blue/50 transition-all duration-300 group"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-electric-blue/10 text-electric-blue flex items-center justify-center group-hover:bg-electric-blue group-hover:text-white transition-all duration-300">
                {point.icon}
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3">
                {point.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
