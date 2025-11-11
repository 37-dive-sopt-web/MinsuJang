import type { ChildrenProps } from '@shared/types/common.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const AppQueryProvider = ({ children }: ChildrenProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
