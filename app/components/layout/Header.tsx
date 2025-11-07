'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Offering', href: '/offering' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-navy-dark/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-3 sm:py-4 md:py-5">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-electric-blue to-accent-hover flex items-center justify-center transform transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-base sm:text-xl">TL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-text-primary font-bold text-base sm:text-xl leading-tight">
                TalentLens
              </span>
              <span className="text-electric-blue text-[10px] sm:text-xs font-semibold leading-tight">
                AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium relative group text-sm xl:text-base"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button href="/contact" variant="primary" className="text-sm">
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-text-primary focus:outline-none p-2 hover:bg-electric-blue/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4 sm:pb-6 border-t border-slate-gray/20"
          >
            <div className="flex flex-col gap-3 pt-4 sm:pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium py-2 px-2 rounded-lg hover:bg-electric-blue/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button href="/contact" variant="primary" fullWidth>
                Book Demo
              </Button>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  );
}
