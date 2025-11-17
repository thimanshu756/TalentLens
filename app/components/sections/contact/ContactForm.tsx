'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import { ToastContainer, Toast, ToastType } from '../../ui/Toast';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    countryCode: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const parsePhoneNumber = (phone: string) => {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    
    // Common country codes (1-3 digits)
    // Try to detect country code from common patterns
    let countryCode = '';
    let phoneNumber = '';
    
    // If starts with +, it likely has country code
    if (phone.startsWith('+')) {
      // Try common country codes
      if (digits.startsWith('1') && digits.length >= 11) {
        // US/Canada: +1XXXXXXXXXX
        countryCode = '1';
        phoneNumber = digits.substring(1);
      } else if (digits.startsWith('91') && digits.length >= 12) {
        // India: +91XXXXXXXXXX
        countryCode = '91';
        phoneNumber = digits.substring(2);
      } else if (digits.startsWith('44') && digits.length >= 12) {
        // UK: +44XXXXXXXXXX
        countryCode = '44';
        phoneNumber = digits.substring(2);
      } else {
        // Default: assume first 1-3 digits are country code
        countryCode = digits.substring(0, Math.min(3, digits.length - 7));
        phoneNumber = digits.substring(countryCode.length);
      }
    } else {
      // No country code provided, default to 1 (US/Canada) or 91 (India)
      // You can change this default based on your target audience
      countryCode = '91'; // Default to India
      phoneNumber = digits;
    }
    
    return { countryCode, phone: phoneNumber };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consentGiven) {
      addToast('Please provide GDPR consent to continue', 'warning');
      return;
    }

    setIsSubmitting(true);

    try {
      // Parse phone number
      const { countryCode, phone } = parsePhoneNumber(formState.phone || '0');
      
      // Validate phone number
      if (!formState.phone || phone.length < 7) {
        addToast('Please enter a valid phone number', 'error');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formState.firstName.trim(),
          lastName: formState.lastName.trim(),
          email: formState.email.trim(),
          subject: formState.subject.trim(),
          countryCode: parseInt(countryCode, 10),
          phone: parseInt(phone, 10),
          message: formState.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      if (data.success) {
        addToast(data.message || 'Thank you for contacting us!', 'success');
        // Reset form
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          countryCode: '',
          phone: '',
          message: '',
        });
        setConsentGiven(false);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      addToast(errorMessage, 'error');
    } finally {
      setIsSubmitting(false);
    }
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
    <>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
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

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name & Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="relative group/input">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    value={formState.firstName}
                    onChange={handleChange}
                    className="peer w-full bg-navy-dark/50 border-2 border-slate-gray/30 rounded-xl px-4 py-3.5 text-text-primary placeholder-transparent focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                    placeholder="First Name"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-4 -top-2.5 bg-[#0F1729] px-2 text-sm text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-electric-blue"
                  >
                    First Name *
                  </label>
                </div>

                {/* Last Name */}
                <div className="relative group/input">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    value={formState.lastName}
                    onChange={handleChange}
                    className="peer w-full bg-navy-dark/50 border-2 border-slate-gray/30 rounded-xl px-4 py-3.5 text-text-primary placeholder-transparent focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                    placeholder="Last Name"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute left-4 -top-2.5 bg-[#0F1729] px-2 text-sm text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-electric-blue"
                  >
                    Last Name *
                  </label>
                </div>
              </div>

              {/* Email & Subject Row */}
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

                {/* Subject */}
                <div className="relative group/input">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="peer w-full bg-navy-dark/50 border-2 border-slate-gray/30 rounded-xl px-4 py-3.5 text-text-primary placeholder-transparent focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                    placeholder="Subject"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 -top-2.5 bg-[#0F1729] px-2 text-sm text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-electric-blue"
                  >
                    Subject *
                  </label>
                </div>
              </div>

              {/* Phone */}
              <div className="relative group/input">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formState.phone}
                  onChange={handleChange}
                  className="peer w-full bg-navy-dark/50 border-2 border-slate-gray/30 rounded-xl px-4 py-3.5 text-text-primary placeholder-transparent focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                  placeholder="Phone (e.g., +91 1234567890)"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 -top-2.5 bg-[#0F1729] px-2 text-sm text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-electric-blue"
                >
                  Phone Number * (include country code, e.g., +91)
                </label>
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
                  className="w-5 h-5 mt-0.5 shrink-0 bg-navy-dark/50 border-2 border-slate-gray/30 rounded text-electric-blue focus:ring-2 focus:ring-electric-blue/20 focus:ring-offset-0 cursor-pointer transition-all duration-300"
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
    </>
  );
}
