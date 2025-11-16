import Form from '@shared/ui/Form.tsx';
import React from 'react';

const LoginForm = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const disabled = true;
  return (
    <Form onSubmit={handleLogin}>
      <Form.Field label='아이디' id='login-id' placeholder='아이디를 입력해 주세요' type='text' />
      <Form.PasswordField
        label='비밀번호'
        id='login-passowrd'
        placeholder='비밀번호를 입력해 주세요'
      />
      <Form.Button label='로그인' disabled={disabled} />
    </Form>
  );
};

export default LoginForm;
