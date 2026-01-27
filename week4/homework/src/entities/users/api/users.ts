import { kyInstance } from '@shared/apis/kyInstance.ts';
import type { BaseResponse } from '@shared/types/http.ts';
import type {
  LoginResponse,
  SignUpResponse,
  UpdateUserInfoResponse,
  UserInfoResponse,
} from '@entities/users/model/response.ts';
import type {
  LoginRequest,
  SignUpRequest,
  UpdateUserRequest,
} from '@entities/users/model/request.ts';

export const fetchUserById = async (id: string) => {
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

export const signup = async (requestBody: SignUpRequest) => {
  return kyInstance
    .post('users', { json: requestBody })
    .json<BaseResponse<SignUpResponse>>()
    .then((res) => res.data);
};

export const updateUser = async (id: string, requestBody: UpdateUserRequest) => {
  return kyInstance
    .patch(`users/${id}`, { json: requestBody })
    .json<BaseResponse<UpdateUserInfoResponse>>()
    .then((res) => res.data);
};
