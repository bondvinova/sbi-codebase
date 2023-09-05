import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/clsx-twmerge';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none active:scale-[0.98] transition-all duration-300 outline-none tracking-normal text-white text-base font-semibold',
  {
    variants: {
      variant: {
        default:
          'bg-sbi-blue-100 disabled:bg-blue-30 focus:ring focus:ring-sbi-blue-100/50 focus:ring-offset-1 hover:bg-sbi-blue-100/90 focus-visible:ring focus-visible:ring-offset-1 focus-visible:ring-sbi0-blue-100/50',
        outline: 'border border-sbi-blue-100 bg-white text-sbi-blue-100',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export default Button;
