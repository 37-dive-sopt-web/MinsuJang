export interface BaseResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
}

export type FieldError = {
  field: string;
  reason: string;
  value?: unknown;
};
