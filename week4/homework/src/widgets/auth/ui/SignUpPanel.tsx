import { Column, Top } from '@shared/ui';
import { SignUpFunnel } from '@features/auth/ui';

const SignUpPanel = () => {
  return (
    <Column>
      <Top children={<Top.TitleParagraph>회원가입</Top.TitleParagraph>} />
      <SignUpFunnel />
    </Column>
  );
};

export default SignUpPanel;
