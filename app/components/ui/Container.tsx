import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Container({ children, className, size = 'lg' }: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div className={clsx('mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16', sizeClasses[size], className)}>
      {children}
    </div>
  );
}
