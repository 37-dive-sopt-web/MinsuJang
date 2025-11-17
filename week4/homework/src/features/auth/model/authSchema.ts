import { z } from 'zod';

const commonSchema = z.object({
  username: z
    .string()
    .min(1, '아이디를 입력해 주세요')
    .max(25, '아이디는 최대 25자 까지 가능합니다'),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상 입력해 주세요')
    .max(64, '비밀번호는 최대 64자까지 가능합니다')
    .refine((value) => !/\s/.test(value), {
      message: '비밀번호에는 공백을 포함할 수 없습니다.',
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: '대문자를 최소 1자 이상 포함해야 합니다.',
    })
    .refine((value) => /[a-z]/.test(value), {
      message: '소문자를 최소 1자 이상 포함해야 합니다.',
    })
    .refine((value) => /\d/.test(value), {
      message: '숫자를 최소 1자 이상 포함해야 합니다.',
    })
    .refine((value) => /[~!@#$%^&*()_+`\-={}\[\]|\\:";'<>?,./]/.test(value), {
      message: '특수문자를 최소 1자 이상 포함해야 합니다.',
    }),
});

export const loginSchema = commonSchema;

export const signUpSchema = commonSchema
  .extend({
    confirmPassword: commonSchema.shape.password,
    name: z.string().min(1, '이름을 입력해 주세요'),
    email: z.email('유효한 이메일 형식이 아닙니다.'),
    age: z
      .number()
      .min(1, '나이는 최소 1살 이상입니다')
      .max(100, '나이는 최대 100살까지 가능합니다'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignUpFormValues = z.infer<typeof signUpSchema>;
