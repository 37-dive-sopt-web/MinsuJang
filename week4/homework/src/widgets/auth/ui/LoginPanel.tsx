import LoginForm from '@features/auth/ui/LoginForm.tsx';
import SignUpLink from '@features/auth/ui/SignUpLink.tsx';
import { Column, Top } from '@shared/ui';

const LoginPanel = () => {
  const handleLogin = () => {};

  const disabled = true;
  return (
    <Column spacing='lg' fullWidth={true}>
      <Top children={<Top.TitleParagraph>로그인</Top.TitleParagraph>} />
      <LoginForm>
        <LoginForm.Field
          label='이메일'
          id='login-email'
          placeholder='이메일을 입력해 주세요'
          type='text'
        />
        <LoginForm.PasswordField
          label='비밀번호'
          id='login-passowrd'
          placeholder='비밀번호를 입력해 주세요'
        />
        <LoginForm.Button label='로그인' onClick={() => handleLogin()} disabled={disabled} />
      </LoginForm>
      <SignUpLink />
    </Column>
  );
};

export default LoginPanel;
