import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { fetchUserById } from '@entities/users/api/users.ts';

export const userQueriesKey = createQueryKeyStore({
  users: {
    byId: (id: string) => ({
      queryKey: ['users', id],
      queryFn: () => fetchUserById(id),
    }),
  },
});
