'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Image from 'next/image';

export default function HowWeHelp() {
  const benefits = [
    {
      icon: '🎯',
      text: 'Automate resume analysis and candidate scoring with transparent AI explanations',
    },
    {
      icon: '⚡',
      text: 'Shortlist the best candidates faster, whether you prefer a human-in-the-loop or fully autonomous process',
    },
    {
      icon: '🔐',
      text: 'Maintain complete control of your data, safely hosted on your cloud environment',
    },
    {
      icon: '🔗',
      text: 'Integrate effortlessly with your existing hiring channels like LinkedIn and your company website',
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
            Cut Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
              Screening Time
            </span>
            , Not Corners
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
