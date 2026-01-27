import { Form, Text } from '@shared/ui';
import type { SignUpFunnelStepProps } from '@features/auth/model/types.ts';

type PasswordStepProps = SignUpFunnelStepProps;

const PasswordStep = ({ register, errors }: PasswordStepProps) => {
  return (
    <>
      <Form.PasswordField
        label='비밀번호'
        id='signup-passowrd'
        placeholder='비밀번호를 입력해 주세요'
        required
        {...register('password')}
      />
      {errors.password && (
        <Text.Strong font={'subheading'} color='red'>
          {errors.password.message}
        </Text.Strong>
      )}
      <Form.PasswordField
        label='비밀번호 확인'
        id='signup-passowrd-confirm'
        placeholder='비밀번호 확인'
        required
        {...register('confirmPassword')}
      />
      {errors.confirmPassword && (
        <Text.Strong font={'subheading'} color='red'>
          {errors.confirmPassword.message}
        </Text.Strong>
      )}
    </>
  );
};

export default PasswordStep;
