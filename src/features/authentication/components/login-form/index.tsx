import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '@/components/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/form-controller';
import Input from '@/components/input';
import { ROUTES_NAME } from '@/constants/router';
import { loginSchema, type LoginSchema } from '@/types/login';

const LoginForm = () => {
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { handleSubmit, control } = methods;

  const onSubmit = (data: LoginSchema) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <FormField
          control={control}
          name="username"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter a username" errorMessage={error?.message} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="mt-6">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} placeholder="*******" errorMessage={error?.message} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Link
          to={ROUTES_NAME.FORGOT_PASSWORD}
          className="mt-1 w-fit text-sbi-blue hover:underline focus-visible:rounded-sm focus-visible:shadow-form focus-visible:outline-none"
        >
          Forgot password?
        </Link>

        <Button className="mt-12">Sign in</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
