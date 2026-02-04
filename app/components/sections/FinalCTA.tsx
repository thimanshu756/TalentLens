'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Section from '../ui/Section';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <Section background="navy">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6">
            Join{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
              Forward-Thinking
            </span>{' '}
            Enterprises Embracing AI
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
            We partner closely with your technical and business teams to deliver custom AI infrastructure that drives growth. Schedule a strategy call to see how Rakri AI can transform your business.
          </p>
          <Button calLink="rakri-ai-vhtois/15min" variant="primary">
            Schedule Your Demo
          </Button>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image src="/assets/landing/handshake.png" alt="Final CTA" width={500} height={500} />
        </motion.div>
      </div>
    </Section>
  );
}
