'use client';

import { motion } from 'framer-motion';
import Section from '../../ui/Section';
import { Zap, Target, Brain, Shield } from 'lucide-react';
import Image from 'next/image';

export default function KeyBenefits() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Reduce Screening Time by 75%+',
      description:
        'Manually reviewing CVs is slow and error-prone. Our AI automates resume parsing and scoring, freeing up your recruiters to focus on candidate engagement and closing.',
      details: [
        'Automated resume analysis in seconds',
        'Instant candidate ranking and prioritization',
        'Eliminate repetitive manual tasks',
        'Focus on high-value candidate interactions',
      ],
      gradient: 'from-amber-500 to-orange-500',
      iconBg: 'from-amber-500/20 to-orange-500/20',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Higher Quality & Consistency',
      description:
        'Paper CV reviews vary by recruiter mood or bias. AI scoring ensures consistent, objective evaluation across candidates to increase the chance of finding the best hires.',
      details: [
        'Objective, data-driven candidate evaluation',
        'Consistent scoring criteria across all applications',
        'Reduced unconscious bias in initial screening',
        'Improved quality of shortlisted candidates',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI That Learns With You',
      description:
        'Our system adapts to your hiring patterns via continuous feedback, enabling smarter shortlists aligned with your company\'s unique values and criteria.',
      details: [
        'Continuous learning from your hiring decisions',
        'Customizable scoring models for your needs',
        'Adapts to company culture and values',
        'Improves accuracy over time',
      ],
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Full Data Privacy Control',
      description:
        'With your data hosted securely on your own Azure environment, you meet all compliance demands without sacrificing flexibility or performance.',
      details: [
        'Data hosted on your Azure cloud',
        'Complete GDPR and regional compliance',
        'Full audit trails and data control',
        'Enterprise-grade security standards',
      ],
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'from-emerald-500/20 to-teal-500/20',
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
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4"
        >
          Key{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
            Benefits
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-text-secondary text-base sm:text-lg max-w-3xl mx-auto px-4"
        >
          Tangible improvements that transform your recruitment process
        </motion.p>
      </div>

      {/* Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16 max-w-5xl mx-auto"
      >
        <div className="relative w-full aspect-video bg-gradient-to-br from-slate-gray/20 to-navy-dark/40 rounded-2xl border-2 border-slate-gray/30 overflow-hidden group">
       <Image src="/assets/offering/brain-illustration.png" alt="Key Benefits" width={1000} height={1000}  className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-slate-gray/10 backdrop-blur-sm border border-slate-gray/20 hover:border-electric-blue/30 transition-all duration-500">
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative flex flex-col md:flex-row items-start gap-6 p-6 sm:p-8 lg:p-10">
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${benefit.iconBg} flex items-center justify-center group-hover:scale-110 transition-all duration-500`}>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    <div className={`relative ${benefit.gradient === 'from-amber-500 to-orange-500' ? 'text-amber-500' : benefit.gradient === 'from-blue-500 to-cyan-500' ? 'text-blue-500' : benefit.gradient === 'from-purple-500 to-pink-500' ? 'text-purple-500' : 'text-emerald-500'}`}>
                      {benefit.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-electric-blue group-hover:to-accent-hover transition-all duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm sm:text-base mb-6">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Impact Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {benefit.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${benefit.gradient} mt-2`} />
                        <span className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
