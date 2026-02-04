'use client';

import { motion } from 'framer-motion';
import Section from '../../ui/Section';
import { Upload, Sparkles, UserCheck, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function HowItWorks() {
  const [activeLevel, setActiveLevel] = useState<'level1' | 'level2'>('level1');

  const level1Steps = [
    {
      number: 1,
      icon: <Upload className="w-8 h-8" />,
      title: 'Data Ingestion',
      description: 'Connect your data sources securely via API or custom pipelines.',
      details: 'We ingest structured and unstructured data while maintaining full encryption and privacy protocols.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: 2,
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Processing',
      description: 'Our agents analyze, predict, and reason over your data.',
      details: 'Custom models trained on your specific context run inference to generate high-value insights.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: 3,
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Human Review',
      description: 'Experts review low-confidence AI outputs to ensure quality.',
      details: 'User-friendly interfaces allow your team to validate AI decisions and provide feedback for retraining.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      number: 4,
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Actionable Outcome',
      description: 'Approved insights trigger downstream workflows automatically.',
      details: 'Seamlessly push results back to your ERP, CRM, or production database.',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const level2Steps = [
    {
      number: 1,
      icon: <Upload className="w-8 h-8" />,
      title: 'Data Ingestion',
      description: 'Connect your data sources securely via API or custom pipelines.',
      details: 'We ingest structured and unstructured data while maintaining full encryption and privacy protocols.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: 2,
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Processing',
      description: 'Our agents analyze, predict, and reason over your data.',
      details: 'Custom models trained on your specific context run inference to generate high-value insights.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: 3,
      icon: <Zap className="w-8 h-8" />,
      title: 'Autonomous Action',
      description: 'High-confidence predictions execute workflows automatically.',
      details: 'Fully autonomous agents handle routine tasks, scaling your operations without adding headcount.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      number: 4,
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Continuous Optimization',
      description: 'The system self-corrects and improves with every interaction.',
      details: 'Closed-loop feedback mechanisms ensure your AI infrastructure gets smarter over time.',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const steps = activeLevel === 'level1' ? level1Steps : level2Steps;

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
          How It{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
            Works
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-text-secondary text-base sm:text-lg max-w-3xl mx-auto px-4"
        >
          A streamlined path from raw data to business value
        </motion.p>

        {/* Level Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex bg-navy-dark/50 backdrop-blur-sm rounded-full p-1.5 border border-slate-gray/20">
            <button
              onClick={() => setActiveLevel('level1')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeLevel === 'level1'
                  ? 'bg-gradient-to-r from-electric-blue to-accent-hover text-white shadow-lg shadow-electric-blue/25'
                  : 'text-text-secondary hover:text-text-primary'
                }`}
            >
              Mode 1: Human-in-the-Loop
            </button>
            <button
              onClick={() => setActiveLevel('level2')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeLevel === 'level2'
                  ? 'bg-gradient-to-r from-electric-blue to-accent-hover text-white shadow-lg shadow-electric-blue/25'
                  : 'text-text-secondary hover:text-text-primary'
                }`}
            >
              Mode 2: Fully Autonomous
            </button>
          </div>
        </motion.div>
      </div>


      <div className="max-w-6xl mx-auto">
        {/* Desktop Timeline View */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-amber-500 to-emerald-500 opacity-20" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-slate-gray`}>
                    {step.number}
                  </div>
                </div>

                {/* Card */}
                <div className="relative mt-8 p-6 bg-navy-dark/50 backdrop-blur-sm rounded-2xl border border-slate-gray/20 hover:border-electric-blue/50 transition-all duration-300 group">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-text-secondary/70 text-xs leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex gap-4"
            >
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue/50 to-transparent" />
              )}

              {/* Step Number */}
              <div className="flex-shrink-0 relative z-10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.number}
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 pb-4">
                <div className="p-5 bg-navy-dark/30 backdrop-blur-sm rounded-2xl border border-slate-gray/20 hover:border-electric-blue/50 transition-all duration-300 group">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-text-secondary/70 text-xs leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
