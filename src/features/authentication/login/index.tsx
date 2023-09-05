import Heading from '@/components/heading';
import AlertIcon from '@/components/icons/AlertIcon';
import AuthAlert from '@/features/authentication/components/auth-alert';
import AuthWrapper from '@/features/authentication/components/auth-wrapper';
import LoginForm from '@/features/authentication/components/login-form';

const Login = () => {
  return (
    <AuthWrapper>
      <Heading className="mb-9 text-center" variant="title-form">
        Aurora Admin portal
      </Heading>
      <AuthAlert className="mb-6" renderIcon={() => <AlertIcon />}>
        Incorrect user name or password.
      </AuthAlert>
      <LoginForm />
    </AuthWrapper>
  );
};

export default Login;
