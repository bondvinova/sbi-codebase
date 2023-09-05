import React from 'react';

interface ResetPasswordProps extends React.HTMLAttributes<HTMLDivElement> {}

const ResetPassword = React.forwardRef<HTMLDivElement, ResetPasswordProps>((props: ResetPasswordProps, ref) => {
  return (
    <div ref={ref} {...props}>
      ResetPassword
    </div>
  );
});

ResetPassword.displayName = 'ResetPassword';

export default ResetPassword;
