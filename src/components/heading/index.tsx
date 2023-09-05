import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/clsx-twmerge';

const headingVariants = cva('m-0 font-semibold', {
  variants: {
    variant: {
      'title-form': 'text-blue-80',
      default: 'text-grey-slate-110',
    },
    size: {
      default: 'text-2xl leading-8',
      sm: 'text-base leading-6',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = React.forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ type = 'h3', className, variant, size, ...props }, ref) => {
    const Type = type;
    return (
      <Type
        {...props}
        className={cn(
          headingVariants({
            variant,
            size,
            className,
          })
        )}
        ref={ref}
      />
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;
