import React from 'react';

interface ForgotPasswordProps extends React.HTMLAttributes<HTMLDivElement> {}

const ForgotPassword = React.forwardRef<HTMLDivElement, ForgotPasswordProps>((props: ForgotPasswordProps, ref) => {
  return (
    <div ref={ref} {...props}>
      ForgotPassword
    </div>
  );
});

ForgotPassword.displayName = 'ForgotPassword';

export default ForgotPassword;
