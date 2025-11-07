'use client';

import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'navy' | 'slate' | 'transparent';
  id?: string;
  noPadding?: boolean;
}

export default function Section({
  children,
  className,
  containerSize = 'lg',
  background = 'navy',
  id,
  noPadding = false,
}: SectionProps) {
  const backgroundClasses = {
    navy: 'bg-navy-dark',
    slate: 'bg-[#0F1729]',
    transparent: 'bg-transparent',
  };

  return (
    <section
      id={id}
      className={clsx(
        backgroundClasses[background],
        !noPadding && 'py-12 sm:py-16 md:py-20 lg:py-24',
        className
      )}
    >
      <Container size={containerSize}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
