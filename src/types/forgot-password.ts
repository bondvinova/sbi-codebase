import * as z from 'zod';

export const forgotPasswordSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
