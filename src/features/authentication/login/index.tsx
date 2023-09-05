import React from 'react';

interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {}

const Login = React.forwardRef<HTMLDivElement, LoginProps>((props: LoginProps, ref) => {
  return (
    <div ref={ref} {...props} className="flex flex-1 items-center justify-center">
      Login
    </div>
  );
});

Login.displayName = 'Login';

export default Login;
