import { userQueriesKey } from '@entities/users/model/userQueriesKey.ts';
import { useSuspenseQuery } from '@tanstack/react-query';
import { isAppError } from '@shared/apis/error.ts';

export const useGetUserInfo = (userId: string) => {
  return useSuspenseQuery({
    ...userQueriesKey.users.byId(userId),
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always',
    refetchOnReconnect: 'always',
    retry: (failureCount, error) => {
      if (isAppError(error) && error.code === 'COMMON-404') return false;
      return failureCount < 1;
    },
    select: (data) => data?.data ?? null,
  });
};
