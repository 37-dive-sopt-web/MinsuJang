import ky from 'ky';
import { AppError } from '@shared/apis/error.ts';

export const kyInstance = ky.create({
  prefixUrl: `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_PREFIX}`,
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    afterResponse: [
      async (_request, _options, response) => {
        if (response.ok) return response;

        let body;
        try {
          body = await response.clone().json();
        } catch {
          body = await response.text();
        }

        throw new AppError(body?.message ?? body?.data.message ?? response.statusText, {
          status: response.status,
          code: body?.code ?? body?.data?.code,
          fieldErrors: body?.data?.errors, // 있으면 보존
          details: body?.data ?? body,
        });
      },
    ],
  },
});
