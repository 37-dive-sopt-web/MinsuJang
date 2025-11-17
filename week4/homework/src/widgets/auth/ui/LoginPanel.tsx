import SignUpLink from '@features/auth/ui/login/SignUpLink.tsx';
import { Column, Loading, Top } from '@shared/ui';
import { LoginForm } from '@features/auth/ui';
import { Suspense } from 'react';

const LoginPanel = () => {
  return (
    <Column spacing='lg' fullWidth={true}>
      <Suspense fallback={<Loading />}>
        <Top children={<Top.TitleParagraph>로그인</Top.TitleParagraph>} />
        <LoginForm />
        <SignUpLink />
      </Suspense>
    </Column>
  );
};

export default LoginPanel;
