import { Form } from '@shared/ui';

const PasswordStep = () => {
  return (
    <>
      <Form.PasswordField
        label='비밀번호'
        id='signup-passowrd'
        placeholder='비밀번호를 입력해 주세요'
        type='text'
      />
      <Form.PasswordField
        label='비밀번호 확인'
        id='signup-passowrd-confirm'
        placeholder='비밀번호 확인'
        type='text'
      />
    </>
  );
};

export default PasswordStep;
