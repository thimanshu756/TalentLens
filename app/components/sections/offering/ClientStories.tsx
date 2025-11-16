'use client';

import { motion } from 'framer-motion';
import Section from '../../ui/Section';

export default function ClientStories() {
  const testimonial = {
    quote:
      "Rakri AI transformed our recruitment process. We're now screening candidates 80% faster while maintaining higher quality standards. The GDPR compliance and Cloud hosting gave us complete peace of mind.",
    author: 'Emma van der Berg',
    position: 'Head of Recruitment',
    company: 'Amsterdam Tech Recruiters',
    metrics: [
      { label: 'Time Saved', value: '80%' },
      { label: 'Quality Improvement', value: '35%' },
      { label: 'Faster Placements', value: '2.5x' },
    ],
  };

  return (
    <Section background="slate">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
        >
          Client{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
            Stories
          </span>
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-electric-blue/5 to-accent-hover/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-electric-blue/20 shadow-2xl"
        >
          {/* Quote */}
          <div className="mb-8">
            <svg
              className="w-12 h-12 text-electric-blue/30 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-light italic">
              {testimonial.quote}
            </p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-accent-hover flex items-center justify-center text-white font-bold text-2xl">
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <p className="text-text-primary font-bold text-lg">
                {testimonial.author}
              </p>
              <p className="text-text-secondary">
                {testimonial.position} at {testimonial.company}
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-gray/20">
            {testimonial.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover mb-2">
                  {metric.value}
                </div>
                <div className="text-text-secondary font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
