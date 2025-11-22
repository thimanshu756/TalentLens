'use client';

import { ButtonHTMLAttributes, ReactNode, useEffect } from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { openCalComPopup } from '../../../utils/calcom';
import {getCalApi} from '@calcom/embed-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  href?: string;
  calLink?: string;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  children,
  href,
  calLink,
  fullWidth = false,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-2 sm:px-8 sm:py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue focus:ring-offset-navy-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

  const variantClasses = {
    primary: 'bg-electric-blue text-white hover:bg-accent-hover shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white',
  };

  useEffect(() => {
    (async function () {
        const cal = await getCalApi()
        cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" })
    })()
}, [])

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e as React.MouseEvent<HTMLButtonElement>);
    }

  };

  if (calLink) {
    return (
      <button
         data-cal-link="rakri-ai-vhtois/15min"

                            data-cal-config='{"layout":"month_view",15 minutes}'
      className={classes} onClick={handleClick} {...props}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick}>
        {content}
      </a>
    );
  }

  return (
    <button
    className={classes} onClick={handleClick} {...props}>
      {content}
    </button>
  );
}
