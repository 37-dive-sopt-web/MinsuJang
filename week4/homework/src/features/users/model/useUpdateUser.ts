import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UpdateUserRequest } from '@entities/users/model/request.ts';
import { updateUser } from '@entities/users/api/users.ts';
import type { UserInfoResponse } from '@entities/users/model/response.ts';

export const useUpdateUser = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: UpdateUserRequest) => updateUser(id, request),
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: ['users', id] });
      const previousData = queryClient.getQueryData(['users', id]);

      queryClient.setQueryData<UserInfoResponse | undefined>(['users', id], (oldData) =>
        oldData ? { ...oldData, ...newData } : oldData,
      );

      return { previousData };
    },
    onError: (error, _newData, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(['users', id], context.previousData);
      }
      alert(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['users', id] });
    },
    onSuccess: () => {
      alert('정보 변경 성공!');
    },
  });
};
