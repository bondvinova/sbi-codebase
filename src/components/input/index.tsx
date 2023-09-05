import * as React from 'react';

import { cn } from '@/lib/clsx-twmerge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, errorMessage, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'placeholder:text-grey-slate-70 flex h-12 w-full rounded-sm border border-grey-slate-30 bg-transparent bg-white px-4 py-3 text-base leading-6 text-grey-slate-110 outline-none transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium hover:border-sbi-blue-100 focus:border-sbi-blue-100 focus:shadow-form focus:outline-none focus-visible:shadow-form focus-visible:outline-none',
          {
            'focus:shadow-form-error focus-visible:shadow-form-error border-danger-70 hover:border-danger-70 focus:border-danger-70':
              errorMessage,
            'cursor-not-allowed hover:border-blue-30': disabled,
          },
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export default Input;
