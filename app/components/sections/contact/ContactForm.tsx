'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      });
      setConsentGiven(false);

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Card Container */}
      <div className="relative p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-gray/10 to-navy-dark/50 backdrop-blur-sm rounded-2xl border-2 border-slate-gray/30 hover:border-electric-blue/30 transition-all duration-300 overflow-hidden group">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-hover/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
            Send us a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-hover">
              message
            </span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mb-8">
            Fill out the form below and we'll get back to you within 24 hours
          </p>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mb-8 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/50 rounded-xl text-green-400 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold mb-1">Message sent successfully!</p>
                  <p className="text-sm text-green-400/80">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Company Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative group/input">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="peer w-full bg-navy-dark/50 border-2 border-slate-gray/30 rounded-xl px-4 py-3.5 text-text-primary placeholder-transparent focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 bg-[#0F1729] px-2 text-sm text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-electric-blue"
                >
                  Full Name *
                </label>
              </div>

              {/* Company */}
              <div className="relative group/input">
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  value={formState.company}
                  onChange={handleChange}
                  className="peer w-full bg-navy-dark/50 border-2 border-slate-gray/30 rounded-xl px-4 py-3.5 text-text-primary placeholder-transparent focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                  placeholder="Company"
                />
                <label
                  htmlFor="company"
                  className="absolute left-4 -top-2.5 bg-[#0F1729] px-2 text-sm text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-electric-blue"
                >
                  Company Name *
                </label>
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div className="relative group/input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="peer w-full bg-navy-dark/50 border-2 border-slate-gray/30 rounded-xl px-4 py-3.5 text-text-primary placeholder-transparent focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 bg-[#0F1729] px-2 text-sm text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-electric-blue"
                >
                  Email Address *
                </label>
              </div>

              {/* Phone */}
              <div className="relative group/input">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="peer w-full bg-navy-dark/50 border-2 border-slate-gray/30 rounded-xl px-4 py-3.5 text-text-primary placeholder-transparent focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                  placeholder="Phone"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 -top-2.5 bg-[#0F1729] px-2 text-sm text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-text-secondary/70"
                >
                  Phone Number (Optional)
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="relative group/input">
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                value={formState.message}
                onChange={handleChange}
                className="peer w-full bg-navy-dark/50 border-2 border-slate-gray/30 rounded-xl px-4 py-3.5 text-text-primary placeholder-transparent focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 resize-none"
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className="absolute left-4 -top-2.5 bg-[#0F1729] px-2 text-sm text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-electric-blue"
              >
                Your Message *
              </label>
            </div>

            {/* GDPR Consent Checkbox */}
            <div className="flex items-start gap-3 p-4 bg-slate-gray/5 border border-slate-gray/20 rounded-xl">
              <input
                type="checkbox"
                id="gdpr-consent"
                checked={consentGiven}
                onChange={(e) => setConsentGiven(e.target.checked)}
                className="w-5 h-5 mt-0.5 flex-shrink-0 bg-navy-dark/50 border-2 border-slate-gray/30 rounded text-electric-blue focus:ring-2 focus:ring-electric-blue/20 focus:ring-offset-0 cursor-pointer transition-all duration-300"
              />
              <label htmlFor="gdpr-consent" className="text-xs sm:text-sm text-text-secondary leading-relaxed cursor-pointer">
                <span className="font-semibold text-text-primary">GDPR Consent:</span> I agree to the processing of my personal data securely and only for the purpose of responding to my inquiry, in accordance with GDPR regulations. *
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting || !consentGiven}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending Message...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
