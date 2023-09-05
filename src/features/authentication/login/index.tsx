import React from 'react';

import Heading from '@/components/heading';
import LoginForm from '@/features/authentication/components/LoginForm';

interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {}

const Login = React.forwardRef<HTMLDivElement, LoginProps>((props: LoginProps, ref) => {
  return (
    <div ref={ref} {...props} className="flex flex-1 items-center justify-center bg-blue-10">
      <div className="flex w-[380px] flex-col">
        <Heading className="mb-9 text-center" variant="title-form">
          Aurora Admin portal
        </Heading>
        <LoginForm />
      </div>
    </div>
  );
});

Login.displayName = 'Login';

export default Login;
