/*
import { createContext, useContext } from 'react';

type FunnelContextValue<T extends string> = {
  currentStep: T;
  next: () => void;
  back: () => void;
  steps: readonly T[];
};

const FunnelContext = createContext<FunnelContextValue<string> | null>(null);

const useFunnelContext = <T extends string>() => {
  const context = useContext(FunnelContext);
  if (!context) {
    throw new Error('useFunnelContext must be used within a FunnelProvider');
  }

  return context as FunnelContextValue<T>;
};
*/
