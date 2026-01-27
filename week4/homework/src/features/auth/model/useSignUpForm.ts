import { useForm } from 'react-hook-form';
import { type SignUpFormValues, signUpSchema } from '@features/auth/model/authSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePostSignUp } from '@features/auth/model/usePostSignUp.ts';
import type { SignUpFunnelStep } from '@features/auth/model/types.ts';
import { stepFields } from '@features/auth/config/signup.ts';

export const useSignUpForm = (
  mode: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all' | undefined,
) => {
  const { mutate } = usePostSignUp();

  const { register, handleSubmit, getFieldState, formState } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    mode: mode,
  });
  const handleSignUp = (data: SignUpFormValues) => {
    mutate(data);
  };

  const getCurrentStepStates = (currentStep: SignUpFunnelStep) => {
    const fields = stepFields[currentStep];
    return fields.map((field) => getFieldState(field, formState));
  };

  return {
    register,
    handleSubmit,
    getFieldState,
    formState,
    handleSignUp,
    getCurrentStepStates,
  };
};
