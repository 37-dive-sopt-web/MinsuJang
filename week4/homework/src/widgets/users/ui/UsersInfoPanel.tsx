import UserSearchBar from '@features/users/ui/UserSearchBar.tsx';
import UserInfo from '@entities/users/UserInfo.tsx';
import { Column, Top } from '@shared/ui';

const UsersInfoPanel = () => {
  return (
    <Column spacing='xl'>
      <Top children={<Top.TitleParagraph>회원 조회</Top.TitleParagraph>} />
      <UserSearchBar />
      <UserInfo />
    </Column>
  );
};

export default UsersInfoPanel;
