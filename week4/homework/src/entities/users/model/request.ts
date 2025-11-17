import type { LoginFormValues, SignUpFormValues } from '@features/auth/model/authSchema.ts';

export type LoginRequest = LoginFormValues;

export type SignUpRequest = Exclude<SignUpFormValues, 'passwordConfirm'>;
