import { Form, Text } from '@shared/ui';
import type { SignUpFunnelStepProps } from '@features/auth/model/types.ts';

type InfoStepProps = SignUpFunnelStepProps & {
  isValid: boolean;
};

const InfoStep = ({ register, errors, isValid }: InfoStepProps) => {
  return (
    <>
      <Form.Field
        label='이름'
        id='signup-name'
        placeholder='이름을 입력해 주세요'
        type='text'
        required
        {...register('name')}
      />
      {errors.name && (
        <Text.Strong font='subheading' color='red'>
          {errors.name.message}
        </Text.Strong>
      )}
      <Form.Field
        label='이메일'
        id='signup-email'
        placeholder='name@example.com'
        type='email'
        required
        {...register('email')}
      />
      {errors.email && (
        <Text.Strong font='subheading' color='red'>
          {errors.email.message}
        </Text.Strong>
      )}
      <Form.Field
        label='나이'
        id='signup-email'
        placeholder='숫자로 입력'
        type='number'
        required
        {...register('age', {
          valueAsNumber: true,
        })}
      />
      {errors.age && (
        <Text.Strong font='subheading' color='red'>
          {errors.age.message}
        </Text.Strong>
      )}
      <Form.Button label='회원가입' disabled={!isValid} type='submit' />
    </>
  );
};

export default InfoStep;
