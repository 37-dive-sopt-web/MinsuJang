import type { ChildrenProps } from '@shared/types/common.ts';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { AppError } from '@shared/apis/error.ts';

type AsyncBoundaryProps = ChildrenProps & {
  pendingFallback?: React.ReactNode;
  rejectedFallback: (error: AppError) => React.ReactNode;
  resetKey?: unknown[];
};

const AsyncBoundary = ({ pendingFallback, rejectedFallback, children, resetKey }: AsyncBoundaryProps) => {
  return (
    <ErrorBoundary fallbackRender={({ error }) => rejectedFallback(error)} resetKeys={resetKey}>
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
