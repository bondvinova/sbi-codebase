import Heading from '@/components/heading';
import Paragraph from '@/components/paragraph';
import AuthWrapper from '@/features/authentication/components/auth-wrapper';
import ForgotPasswordForm from '@/features/authentication/components/forgot-password-form';

const ForgotPassword = () => {
  return (
    <AuthWrapper>
      <Heading className="mb-9 text-center" variant="title-form">
        Forgot password
      </Heading>
      <Paragraph className="mb-9">Enter your username and we will send you a link to reset your password</Paragraph>
      <ForgotPasswordForm />
    </AuthWrapper>
  );
};

export default ForgotPassword;
