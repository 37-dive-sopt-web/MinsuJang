import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { SignUpFormValues } from '@features/auth/model/authSchema.ts';

export type SignUpFunnelStep = 'ID' | 'PASSWORD' | 'INFO';

export type SignUpFunnelStepProps = {
  register: UseFormRegister<SignUpFormValues>;
  errors: FieldErrors<SignUpFormValues>;
};
