import { kyInstance } from '@shared/apis/kyInstance.ts';
import type { BaseResponse } from '@shared/types/http.ts';
import type { UserInfoResponse } from '@entities/users/model/response.ts';

export const fetchUserById = async (id: string = '1') => {
  return await kyInstance.get(`users/${id}`).json<BaseResponse<UserInfoResponse>>();
};
