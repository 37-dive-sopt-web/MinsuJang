import { Column, Top } from '@shared/ui';
import ProfileForm from '@features/users/ui/ProfileForm.tsx';

const UserInfo = () => {
  return (
    <Column spacing='xl'>
      <Top children={<Top.TitleParagraph>내 정보</Top.TitleParagraph>} />
      <ProfileForm />
    </Column>
  );
};

export default UserInfo;
