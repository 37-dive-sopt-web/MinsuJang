import { useFunnelFlow } from '@features/auth/model/useFunnelFlow.ts';
import { Button, Form } from '@shared/ui';
import type { SignUpFunnelStep } from '@features/auth/model/types.ts';
import { signUpFunnelSteps } from '@features/auth/config/signup.ts';
import { IdStep, InfoStep, PasswordStep } from '@features/auth/ui';
import { useSignUpForm } from '@features/auth/model/useSignUpForm.ts';

const SignUpFunnel = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    handleSignUp,
    getCurrentStepStates,
  } = useSignUpForm('all');
  const { currentStep, nextStep } = useFunnelFlow<SignUpFunnelStep>(signUpFunnelSteps);

  const stepStates = getCurrentStepStates(currentStep);
  const isCurrentStepValid = stepStates.every((state) => state.isTouched && !state.invalid);

  const renderStep = () => {
    switch (currentStep) {
      case 'ID': {
        return <IdStep register={register} errors={errors} />;
      }
      case 'PASSWORD': {
        return <PasswordStep register={register} errors={errors} />;
      }
      case 'INFO': {
        return <InfoStep register={register} errors={errors} isValid={isValid} />;
      }
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleSignUp)}>{renderStep()}</Form>
      {currentStep !== 'INFO' && (
        <Button
          label='다음'
          onClick={nextStep}
          tone={!isCurrentStepValid ? 'secondary' : 'primary'}
          disabled={!isCurrentStepValid}
        />
      )}
    </>
  );
};

export default SignUpFunnel;
