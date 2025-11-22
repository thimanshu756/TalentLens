'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe, Linkedin, Twitter, Calendar } from 'lucide-react';
import Button from '../../ui/Button';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'connect@rakriai.com',
      link: 'mailto:connect@rakriai.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 80 1234 5678',
      link: 'tel:+918012345678',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const businessHours = [
    { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM CET', active: true },
    { days: 'Saturday', hours: '10:00 AM - 2:00 PM CET', active: true },
    { days: 'Sunday', hours: 'Closed', active: false },
  ];

  const locations = [
    {
      icon: <Globe className="w-5 h-5" />,
      region: 'European Operations',
      description: 'Remote-first with CET timezone alignment',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      region: 'Development Center',
      description: 'India-based technical team',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Schedule a Call Card */}
      <div className="relative p-6 sm:p-8 bg-gradient-to-br from-electric-blue/10 to-accent-hover/10 backdrop-blur-sm rounded-2xl border-2 border-electric-blue/30 hover:border-electric-blue/50 transition-all duration-300 overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-electric-blue/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative text-center">
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-electric-blue to-accent-hover mb-4">
            <Calendar className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-xl font-bold text-text-primary mb-2">
            Prefer a Direct Call?
          </h3>

          <p className="text-text-secondary text-sm mb-6 leading-relaxed">
            Schedule a 15-minute consultation with our team to discuss your recruitment needs
          </p>

          <Button
            variant="primary"
            calLink="rakri-ai-vhtois/15min"
            fullWidth
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </span>
          </Button>
        </div>
      </div>

      {/* Contact Details Card */}
      <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-gray/10 to-navy-dark/50 backdrop-blur-sm rounded-2xl border-2 border-slate-gray/30 hover:border-electric-blue/30 transition-all duration-300 overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-electric-blue/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
              Touch
            </span>
          </h3>

          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <motion.a
                key={detail.label}
                href={detail.link}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-navy-dark/50 rounded-xl border border-slate-gray/20 hover:border-electric-blue/50 transition-all duration-300 group/item"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${detail.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {detail.icon}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-text-secondary text-xs font-medium mb-0.5">
                    {detail.label}
                  </div>
                  <div className="text-text-primary font-semibold text-sm truncate group-hover/item:text-electric-blue transition-colors duration-300">
                    {detail.value}
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-gray/50 group-hover/item:text-electric-blue group-hover/item:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Business Hours Card */}
      <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-gray/10 to-navy-dark/50 backdrop-blur-sm rounded-2xl border-2 border-slate-gray/30 overflow-hidden">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-electric-blue to-accent-hover">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-text-primary">
            Business Hours
          </h3>
        </div>

        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <motion.div
              key={schedule.days}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-between items-center p-3 rounded-lg bg-navy-dark/30 border border-slate-gray/10"
            >
              <span className="text-text-secondary text-sm">{schedule.days}</span>
              <span className={`text-sm font-semibold ${schedule.active ? 'text-electric-blue' : 'text-text-secondary'}`}>
                {schedule.hours}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-electric-blue/5 border border-electric-blue/20 rounded-lg">
          <p className="text-xs text-text-secondary">
            <span className="text-electric-blue font-semibold">CET Timezone:</span> We operate in Central European Time to serve our European clients efficiently
          </p>
        </div>
      </div>

      {/* Locations Card */}
      <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-gray/10 to-navy-dark/50 backdrop-blur-sm rounded-2xl border-2 border-slate-gray/30 overflow-hidden">
        <h3 className="text-xl font-bold text-text-primary mb-6">
          Our Locations
        </h3>

        <div className="space-y-4">
          {locations.map((location, index) => (
            <motion.div
              key={location.region}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 bg-navy-dark/50 rounded-xl border border-slate-gray/20 hover:border-electric-blue/30 transition-all duration-300 group/location"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${location.gradient} flex-shrink-0 group-hover/location:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {location.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-text-primary font-semibold mb-1">
                    {location.region}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {location.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}
