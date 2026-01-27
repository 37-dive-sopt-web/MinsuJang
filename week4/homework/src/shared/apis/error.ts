export type ApiErrorResponse = {
  success: false;
  code: string;
  message: string;
  data?: {
    code?: string;
    message?: string;
    errors?: Array<{
      field: string;
      message: string;
    }>;
  };
};

export class AppError extends Error {
  status: number;
  code?: string;
  fieldErrors?: Array<{ field: string; message: string }>;
  details?: unknown;

  constructor(
    message: string,
    params: {
      status: number;
      code?: string;
      fieldErrors?: Array<{ field: string; message: string }>;
      details?: unknown;
    },
  ) {
    super(message);
    this.name = 'AppError';
    this.status = params.status;
    this.code = params.code;
    this.fieldErrors = params.fieldErrors;
    this.details = params.details;
  }
}

export const isAppError = (error: unknown): error is AppError => {
  return error instanceof AppError;
};
