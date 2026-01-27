import { useMutation } from '@tanstack/react-query';
import { login } from '@entities/users/api/users.ts';
import type { LoginRequest } from '@entities/users/model/request.ts';
import { useAuthStore } from '@shared/model/useAuthStore.ts';
import { useNavigate } from 'react-router';

export const usePostLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (request: LoginRequest) => login(request),
    onSuccess: (res) => {
      useAuthStore.getState().login(res.userId);
      navigate('/');
    },
  });
};
