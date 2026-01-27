import { useMutation } from '@tanstack/react-query';
import { deleteUser } from '@entities/users/api/users.ts';

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      alert('회원 탈퇴 성공입니다람쥐');
      window.location.href = '/auth/login';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
      return;
    },
  });
};
