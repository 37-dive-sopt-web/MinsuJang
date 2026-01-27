import { useMutation } from '@tanstack/react-query';
import { signup } from '@entities/users/api/users.ts';
import type { SignUpRequest } from '@entities/users/model/request.ts';
import { useNavigate } from 'react-router';

export const usePostSignUp = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (request: SignUpRequest) => signup(request),
    onSuccess: () => {
      alert('회원가입에 성공하였습니다.');
      navigate('/auth/login');
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};
