import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/clsx-twmerge';

const paragraphVariants = cva('max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center', {
  variants: {
    size: {
      default: 'text-base sm:text-lg',
      sm: 'text-sm sm:text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, IParagraphProps>((props, ref) => {
  const { className, size, children, ...rest } = props;

  return (
    <p ref={ref} {...rest} className={cn(paragraphVariants({ size, className }))}>
      {children}
    </p>
  );
});

Paragraph.displayName = 'Paragraph';

export default Paragraph;
