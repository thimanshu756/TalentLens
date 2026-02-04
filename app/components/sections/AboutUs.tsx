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
            Bridging the Gap Between{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
              Ambition and Execution
            </span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
            Companies know AI is the future, but building the secure, compliant infrastructure to support it is complex and risky. Rakri AI solves this by providing a managed AI backbone that lives on your cloud. We handle the security, compliance, and model orchestration so you can focus on business value.
          </p>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Whether you need to automate workflows, analyze proprietary data, or build custom agents, our platform provides the secure foundation for your enterprise AI strategy.
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
