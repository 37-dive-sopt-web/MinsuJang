import type { SignUpFunnelStep } from '@features/auth/model/types.ts';
import type { SignUpFormValues } from '@features/auth/model/authSchema.ts';

export const signUpFunnelSteps: SignUpFunnelStep[] = ['ID', 'PASSWORD', 'INFO'];

export const stepFields: Record<SignUpFunnelStep, (keyof SignUpFormValues)[]> = {
  ID: ['username'],
  PASSWORD: ['password', 'confirmPassword'],
  INFO: ['email', 'name', 'age'],
};
