'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Image from 'next/image';

export default function HowWeHelp() {
  const benefits = [
    {
      icon: '🎯',
      text: 'Deploy custom AI agents and models trained on your proprietary data without data leakage risks',
    },
    {
      icon: '⚡',
      text: 'Integrate AI into your existing software ecosystem via robust, developer-friendly APIs and webhooks',
    },
    {
      icon: '🔐',
      text: 'Maintain complete data sovereignty with infrastructure that runs securely in your own cloud environment',
    },
    {
      icon: '🔗',
      text: 'Scale effortlessly from a single pilot project to enterprise-wide AI adoption with managed pipelines',
    },
  ];

  return (
    <Section background="slate">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Process Visual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image src="/assets/landing/screening-time.png" alt="How We Help" width={500} height={500} />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6 sm:mb-8">
            Seamless{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
              Integration
            </span>{' '}
            into Your Ecosystem
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start group"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-electric-blue/10 flex items-center justify-center text-2xl sm:text-3xl group-hover:bg-electric-blue/20 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed pt-2">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
