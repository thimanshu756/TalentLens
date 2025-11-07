'use client';

import { motion } from 'framer-motion';
import Section from '../../ui/Section';
import { ShieldCheck, Globe, Brain, Plug } from 'lucide-react';
import Image from 'next/image';

export default function WhyTalentLens() {
  
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'GDPR & Data Sovereignty Guaranteed',
      description:
        'We understand European and US privacy laws inside out. Your candidate data resides securely on your Azure cloud resources. You have full control and auditability of all data flows, fully compliant with GDPR and other regional mandates.',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderGradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'Transparent & Explainable AI Scoring',
      description:
        'Our proprietary AI doesn\'t just score candidates — it explains why. Each recommendation includes detailed, understandable reasoning so your team retains complete control and trust.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderGradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Designed for Your Region & Culture',
      description:
        'We align with local recruitment practices in Europe and the US, including CET timezone support, multi-language readiness, and deep knowledge of regional hiring norms.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      borderGradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Plug className="w-10 h-10" />,
      title: 'Custom Integration with Your Existing Systems',
      description:
        'Whether you use LinkedIn, WordPress, or custom career sites, TalentLens AI integrates smoothly, preserving your workflows with minimal disruption.',
      gradient: 'from-orange-500/20 to-red-500/20',
      borderGradient: 'from-orange-500 to-red-500',
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
            TalentLens AI?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-text-secondary text-base sm:text-lg max-w-3xl mx-auto px-4"
        >
          Experience the perfect blend of cutting-edge AI technology, compliance, and human expertise
        </motion.p>
      </div>

      {/* Image Placeholder Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16"
      >
        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-gradient-to-br from-slate-gray/20 to-navy-dark/40 rounded-2xl border-2 border-slate-gray/30 overflow-hidden group">
         <Image src="/assets/offering/data-security.png" alt="Why TalentLens AI" width={1000} height={1000}  className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Horizontal Scrollable Cards on Mobile, Grid on Desktop */}
      <div className="relative">
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-8 lg:gap-10 scrollbar-hide">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto snap-center md:snap-align-none"
            >
              <div className={`relative h-full p-6 sm:p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br ${feature.gradient} border-2 border-slate-gray/30 hover:border-electric-blue/50 transition-all duration-300 group overflow-hidden`}>
                {/* Icon Container */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.borderGradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.borderGradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="md:hidden text-center mt-6 text-text-secondary text-sm"
      >
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          Swipe to explore →
        </motion.div>
      </motion.div>
    </Section>
  );
}
