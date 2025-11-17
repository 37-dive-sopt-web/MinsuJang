import { type AfterResponseHook } from 'ky';
import { type ApiErrorResponse, AppError } from '@shared/apis/error.ts';

export const afterResponseHook: AfterResponseHook = async (_request, _options, response) => {
  if (response.ok) return response;
  const body = (await response.clone().json()) as ApiErrorResponse;

  throw new AppError(body.data?.message ?? body.message, {
    status: response.status,
    code: body.code,
    fieldErrors: body.data?.errors,
    details: body,
  });
};
