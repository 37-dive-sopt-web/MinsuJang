import { kyInstance } from '@shared/apis/kyInstance.ts';
import type { BaseResponse } from '@shared/types/http.ts';
import type { LoginResponse, UserInfoResponse } from '@entities/users/model/response.ts';
import type { LoginRequest } from '@entities/users/model/request.ts';

export const fetchUserById = async (id: string = '1') => {
  return await kyInstance.get(`users/${id}`).json<BaseResponse<UserInfoResponse>>();
};

export const deleteUser = async (id: string) => {
  return await kyInstance.delete(`users/${id}`).json();
};

export const login = async (requestBody: LoginRequest) => {
  return await kyInstance
    .post('auth/login', { json: requestBody })
    .json<BaseResponse<LoginResponse>>()
    .then((res) => res.data);
};
