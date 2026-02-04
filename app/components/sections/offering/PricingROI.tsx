'use client';

import { motion } from 'framer-motion';
import Section from '../../ui/Section';
import { Euro, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Image from 'next/image';

export default function PricingROI() {
  const pricingDetails = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Platform Implementation',
      priceRange: '€18,000 – €35,000',
      description: 'One-time fee for secure cloud setup and custom integrations',
      features: [
        'Dedicated cloud environment setup',
        'Custom API & data pipeline integration',
        'Security auditing and configuration',
        'Team training and documentation',
        'Initial model fine-tuning',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Euro className="w-8 h-8" />,
      title: 'Infrastructure Management',
      priceRange: 'Starting at €1,500/year',
      description: 'Optional managed services to keep your AI backbone resilient',
      features: [
        'Security patches and system updates',
        'Real-time uptime monitoring',
        'Technical support (CET business hours)',
        'Performance optimization',
        'Infrastructure scaling management',
      ],
      gradient: 'from-purple-500 to-pink-500',
      optional: true,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Usage & Inference',
      priceRange: 'Volume Based',
      description: 'Pay-per-use model scaling with your data volume',
      features: [
        'Optimized inference costs',
        'Detailed transparent logging',
        'No hidden data egress fees',
        'Auto-scaling based on load',
        'Cost allocation dashboard',
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const roiMetrics = [
    {
      label: 'Speed',
      value: '75%+',
      description: 'Faster data processing',
      gradient: 'from-amber-500 to-orange-500',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      label: 'Payback',
      value: '4-6',
      unit: 'months',
      description: 'Typical cost recovery',
      gradient: 'from-blue-500 to-cyan-500',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      label: 'Accuracy',
      value: '99%+',
      description: 'Consistent outputs',
      gradient: 'from-purple-500 to-pink-500',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      label: 'Scale',
      value: '10x',
      description: 'More capacity',
      gradient: 'from-emerald-500 to-teal-500',
      icon: <TrendingUp className="w-6 h-6" />,
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
          Investment &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
            Returns
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-text-secondary text-base sm:text-lg max-w-3xl mx-auto px-4"
        >
          Clear, predictable infrastructure pricing with measurable business impact
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
        <div className="relative w-full aspect-video bg-[#191F2F] rounded-2xl border-2 border-slate-gray/30 overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/assets/offering/roi.png" alt="How It Works" width={1000} height={1000} className="w-full h-full object-contain" />
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Pricing Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {pricingDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full p-6 sm:p-8 bg-slate-gray/10 backdrop-blur-sm rounded-2xl border-2 border-slate-gray/20 hover:border-electric-blue/50 transition-all duration-300 relative overflow-hidden">
                {detail.optional && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent-hover/20 border border-accent-hover/50 rounded-full text-accent-hover text-xs font-semibold">
                    Optional
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${detail.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {detail.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {detail.title}
                  </h3>
                  <div className={`text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${detail.gradient} mb-3`}>
                    {detail.priceRange}
                  </div>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    {detail.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {detail.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <defs>
                            <linearGradient id={`gradient-${index}-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" className={detail.gradient.split(' ')[0].replace('from-', '')} />
                              <stop offset="100%" className={detail.gradient.split(' ')[2]} />
                            </linearGradient>
                          </defs>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                            className="text-electric-blue"
                          />
                        </svg>
                        <span className="text-text-secondary text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Insight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-8 sm:p-10 bg-gradient-to-br from-electric-blue/10 to-accent-hover/10 backdrop-blur-sm rounded-2xl border-2 border-electric-blue/30 mb-12 sm:mb-16 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-hover/10 rounded-full blur-3xl" />

          <div className="relative text-center mb-8">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-electric-blue to-accent-hover text-white mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              ROI Insight
            </h3>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Typical clients recover investment within 4-6 months through operational automation and faster decision cycles. The combination of reduced manual processing and improved data accuracy delivers measurable business impact.
            </p>
          </div>

          {/* ROI Metrics Grid */}
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6">
            {roiMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-navy-dark/50 backdrop-blur-sm rounded-xl border border-slate-gray/20"
              >
                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${metric.gradient} text-white mb-3`}>
                  {metric.icon}
                </div>
                <div className={`text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient} mb-1`}>
                  {metric.value}
                  {metric.unit && <span className="text-xl ml-1">{metric.unit}</span>}
                </div>
                <div className="text-text-primary text-sm font-semibold mb-1">
                  {metric.label}
                </div>
                <div className="text-text-secondary text-xs">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
