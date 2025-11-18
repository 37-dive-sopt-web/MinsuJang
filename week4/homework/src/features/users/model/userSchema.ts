import { signUpSchema } from '@features/auth/model/authSchema.ts';
import { z } from 'zod';

export const userUpdateSchema = signUpSchema.pick({
  name: true,
  email: true,
  age: true,
});

export type UserUpdateFormValues = z.infer<typeof userUpdateSchema>;
