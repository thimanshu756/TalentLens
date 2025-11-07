'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  href?: string;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  children,
  href,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue focus:ring-offset-navy-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

  const variantClasses = {
    primary: 'bg-electric-blue text-white hover:bg-accent-hover shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white',
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
