import { useFunnelFlow } from '@features/auth/model/useFunnelFlow.ts';
import { Button, Form } from '@shared/ui';
import type { SignUpFunnelStep } from '@features/auth/model/types.ts';
import { signUpFunnelSteps } from '@features/auth/config/signup.ts';
import { IdStep, InfoStep, PasswordStep } from '@features/auth/ui';
import type { FormEvent } from 'react';

const SignUpFunnel = () => {
  const { currentStep, nextStep } = useFunnelFlow<SignUpFunnelStep>(signUpFunnelSteps);
  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'ID': {
        return <IdStep />;
      }
      case 'PASSWORD': {
        return <PasswordStep />;
      }
      case 'INFO': {
        return <InfoStep />;
      }
    }
  };

  return (
    <>
      <Form onSubmit={handleSignUp}>{renderStep()}</Form>
      {currentStep !== 'INFO' && <Button label='다음' onClick={nextStep} />}
    </>
  );
};

export default SignUpFunnel;
