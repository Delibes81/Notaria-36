import React from 'react';
import { cn } from '../../lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(centered ? 'text-center' : 'text-left', 'mb-12', className)}>
      <h2 className="font-heading text-3xl font-semibold text-primary-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600">
          {subtitle}
        </p>
      )}
      <div className={cn('mt-4 h-1 w-24 bg-gold-500', centered ? 'mx-auto' : '')} />
    </div>
  );
};

export default SectionTitle;