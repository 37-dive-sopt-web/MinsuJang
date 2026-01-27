import { Form, Text } from '@shared/ui';
import type { SignUpFunnelStepProps } from '@features/auth/model/types.ts';

type IdStepProps = SignUpFunnelStepProps;
const IdStep = ({ register, errors }: IdStepProps) => {
  return (
    <>
      <Form.Field
        label='아이디'
        id='signup-id'
        placeholder='아이디를 입력해 주세요.'
        type='text'
        {...register('username')}
        required
      />
      {errors.username && (
        <Text.Strong font='subheading' color='red'>
          {errors.username?.message}
        </Text.Strong>
      )}
    </>
  );
};

export default IdStep;
