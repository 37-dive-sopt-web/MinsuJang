import SignUpLink from '@features/auth/ui/login/SignUpLink.tsx';
import { Column, Top } from '@shared/ui';
import { LoginForm } from '@features/auth/ui';

const LoginPanel = () => {
  return (
    <Column spacing='lg' fullWidth={true}>
      <Top children={<Top.TitleParagraph>로그인</Top.TitleParagraph>} />
      <LoginForm />
      <SignUpLink />
    </Column>
  );
};

export default LoginPanel;
