'use client';


import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-navy-dark pt-16 sm:pt-20 pb-12 sm:pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-navy-dark to-navy-dark" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-electric-blue/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-hover/20 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <Image src="/assets/logo.png" alt="Rakri AI"
                className="w-[70px] h-[70px] animate-spin transition-all"
                style={{ animationDuration: '8s' }}
                width={100} height={100} />

              <div className="flex flex-col items-start">
                <span className="text-text-primary font-bold text-base sm:text-3xl leading-tight">  Rakri </span>
                <span className="text-electric-blue text-[10px] sm:text-lg font-semibold leading-tight">  AI </span>
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight px-4 sm:px-0"
          >
            Accelerate Your Business Transformation with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
              Secure AI Infrastructure
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            We build and host the AI layer for your company. Seamlessly integrate custom AI models into your existing workflows with full GDPR compliance and data sovereignty on your own cloud infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0"
          >
            <Button href="/offering" variant="primary">
              Explore Our Solutions
            </Button>
            <Button calLink="rakri-ai-vhtois/15min" variant="secondary">
              Book a Strategy Call
            </Button>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-text-secondary italic text-xs sm:text-sm px-4 sm:px-0"
          >
            "Your Private AI Backbone, Built for Scale"
          </motion.p>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-electric-blue rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-electric-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
