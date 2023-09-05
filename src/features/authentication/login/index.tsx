import React from 'react';

interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {}

const Login = React.forwardRef<HTMLDivElement, LoginProps>((props: LoginProps, ref) => {
  return (
    <div ref={ref} {...props}>
      Login
    </div>
  );
});

Login.displayName = 'Login';

export default Login;
