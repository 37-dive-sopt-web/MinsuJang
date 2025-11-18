import { Column, Loading, Top } from '@shared/ui';
import { SignUpFunnel } from '@features/auth/ui';
import { Suspense } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const SignUpPanel = () => {
  const navigate = useNavigate();
  return (
    <Column>
      <Top>
        <button style={{ marginRight: 'auto' }} onClick={() => navigate(-1)}>
          <ArrowLeft size={16} />
        </button>
        <Top.TitleParagraph>회원가입</Top.TitleParagraph>
      </Top>
      <Suspense fallback={<Loading />}>
        <SignUpFunnel />
      </Suspense>
    </Column>
  );
};

export default SignUpPanel;
