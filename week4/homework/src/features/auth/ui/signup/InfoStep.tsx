import { Form } from '@shared/ui';

type InfoStepProps = {};

const InfoStep = ({}: InfoStepProps) => {
  return (
    <>
      <Form.Field label='이름' id='signup-name' placeholder='이름을 입력해 주세요' type='text' />
      <Form.Field label='이메일' id='signup-email' placeholder='name@example.com' type='email' />
      <Form.Field label='나이' id='signup-email' placeholder='숫자로 입력' type='number' />
      <Form.Button label='회원가입' disabled={false} type='submit' />
    </>
  );
};

export default InfoStep;
