import ky from 'ky';
import { afterResponseHook } from '@shared/apis/hooks.ts';

const HTTP_TIME_OUT = 10_000;
const RETRY_COUNT = 0;
const HEADERS = { 'Content-Type': 'application/json' };

export const kyInstance = ky.create({
  prefixUrl: `http://15.164.129.239/api/v1`,
  timeout: HTTP_TIME_OUT,
  retry: RETRY_COUNT,
  headers: HEADERS,
  hooks: {
    afterResponse: [afterResponseHook],
  },
});
