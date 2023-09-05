import React from 'react';

interface TwoFactorAuthenticationProps extends React.HTMLAttributes<HTMLDivElement> {}

const TwoFactorAuthentication = React.forwardRef<HTMLDivElement, TwoFactorAuthenticationProps>(
  (props: TwoFactorAuthenticationProps, ref) => {
    return (
      <div ref={ref} {...props}>
        TwoFactorAuthentication
      </div>
    );
  }
);

TwoFactorAuthentication.displayName = 'TwoFactorAuthentication';

export default TwoFactorAuthentication;
