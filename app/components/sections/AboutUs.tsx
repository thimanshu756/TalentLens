'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <Section background="navy">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6">
            Solving Recruitment's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
              Biggest Bottlenecks
            </span>{' '}
            with AI
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
            Recruitment teams spend countless hours manually sifting through applications, causing delays, inconsistencies, and lost opportunities. Rakri AI transforms this process with powerful AI algorithms that not only speed up candidate screening but also reduce bias and ensure full compliance with GDPR and local data laws.
          </p>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Our customizable platform integrates seamlessly with your existing website and LinkedIn workflows, putting you ahead in the competitive hiring landscape.
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
    <Image src="/assets/landing/recruitervsai.png" alt="About Us" width={500} height={500} />
        </motion.div>
      </div>
    </Section>
  );
}
