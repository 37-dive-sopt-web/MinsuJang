import { Column, Text, Top } from '@shared/ui';
import ProfileForm from '@features/users/ui/ProfileForm.tsx';
import { Suspense } from 'react';
import Loading from '@shared/ui/Loading.tsx';
import AsyncBoundary from '@shared/ui/AsyncBoundary.tsx';

const MyInfo = () => {
  return (
    <Column spacing='xl'>
      <Top children={<Top.TitleParagraph>내 정보</Top.TitleParagraph>} />
      <AsyncBoundary
        rejectedFallback={(error) => <Text font={'heading'}>{error.message}</Text>}
        pendingFallback={<Loading />}
      >
        <Suspense fallback={<Loading />}>
          <ProfileForm />
        </Suspense>
      </AsyncBoundary>
    </Column>
  );
};

export default MyInfo;
