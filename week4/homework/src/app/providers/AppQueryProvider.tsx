import type { ChildrenProps } from '@shared/types/common.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      retry: 1,
      retryDelay: 1000,
    },
  },
});

export const AppQueryProvider = ({ children }: ChildrenProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
