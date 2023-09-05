import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Button from '@/components/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/form-controller';
import Input from '@/components/input';
import { ForgotPasswordSchema, forgotPasswordSchema } from '@/types/forgot-password';

const ForgotPasswordForm = () => {
  const methods = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      username: '',
    },
  });

  const { handleSubmit, control } = methods;

  const onSubmit = (data: ForgotPasswordSchema) => {
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
                <Input {...field} placeholder="sbidm.w.teo" errorMessage={error?.message} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-8" type="submit">
          Send link to email
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
