import type { FieldError } from '@shared/types/http.ts';

export class AppError extends Error {
  constructor(message: string, init?: Partial<AppError>) {
    super(message);
    Object.assign(this, init);
  }

  status?: number;
  code?: string;
  fieldErrors?: FieldError[];
  details?: unknown;
}
