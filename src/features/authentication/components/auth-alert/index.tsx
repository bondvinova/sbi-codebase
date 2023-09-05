import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/clsx-twmerge';

export const authAlertVariants = cva(
  'flex w-full items-center justify-start space-x-2 rounded-sm p-4 text-sm leading-5 text-global-slate-100 border',
  {
    variants: {
      variant: {
        danger: 'border-danger-60 bg-danger-10',
        warning: 'border-warning-60 bg-warning-10',
      },
    },
    defaultVariants: {
      variant: 'danger',
    },
  }
);

interface AuthAlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof authAlertVariants> {
  renderIcon?: () => JSX.Element;
}

const AuthAlert = React.forwardRef<HTMLDivElement, AuthAlertProps>((props, ref) => {
  const { className, renderIcon, variant, children, ...rest } = props;
  return (
    <p ref={ref} className={cn(authAlertVariants({ variant }), className)} {...rest}>
      {renderIcon?.()}
      <span>{children}</span>
    </p>
  );
});

AuthAlert.displayName = 'AuthAlert';

export default AuthAlert;
