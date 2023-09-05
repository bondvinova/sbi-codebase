import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/clsx-twmerge';

const labelVariants = cva('peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal', {
  variants: {
    variant: {
      default: 'text-global-slate-80',
      select: 'text-grey-slate-110',
    },
    size: {
      default: 'text-sm leading-5',
      base: 'text-base leading-6',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & LabelProps
>(({ className, variant, size, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants({ variant, size }), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
