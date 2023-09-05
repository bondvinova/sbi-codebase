import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/clsx-twmerge';

const paragraphVariants = cva('text-blue-80 m-0', {
  variants: {
    size: {
      default: 'text-base leading-6',
      sm: 'text-sm',
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
