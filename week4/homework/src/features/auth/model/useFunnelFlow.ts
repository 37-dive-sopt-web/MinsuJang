import { useState } from 'react';

export const useFunnelFlow = <T>(steps: T[]) => {
  const [currentStep, setCurrentStep] = useState<T>(steps[0]);
  const index = steps.indexOf(currentStep);
  const isFirst = index === 0;
  const isLast = index === steps.length - 1;

  const nextStep = () => {
    if (isLast) return;

    const nextStep = steps[index + 1];
    setCurrentStep(nextStep);
  };

  const backStep = () => {
    if (isFirst) return;

    const backStep = steps[index - 1];
    setCurrentStep(backStep);
  };

  return { currentStep, nextStep, backStep };
};
