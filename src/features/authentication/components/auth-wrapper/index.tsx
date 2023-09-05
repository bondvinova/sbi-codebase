import React from 'react';

import logo from '@/assets/logo.png';

interface AuthWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const AuthWrapper = React.forwardRef<HTMLDivElement, AuthWrapperProps>(
  ({ children, ...props }: AuthWrapperProps, ref) => {
    return (
      <div ref={ref} {...props} className="relative flex flex-1 items-center justify-center bg-blue-10">
        <div className="absolute left-10 top-10 flex">
          <img srcSet={`${logo} 2x`} alt="logo" />
        </div>
        <div className="flex w-[380px] flex-col">{children}</div>
      </div>
    );
  }
);

AuthWrapper.displayName = 'AuthWrapper';

export default AuthWrapper;
