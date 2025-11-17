import Header from '@shared/ui/Header.tsx';
import { Top } from '@shared/ui';
import MyPageTabs from '@features/app-tabs/ui/MyPageTabs.tsx';

const AppHeader = () => {
  return (
    <Header>
      <Top children={<Top.TitleParagraph>마이페이지</Top.TitleParagraph>} />
      <MyPageTabs />
    </Header>
  );
};

export default AppHeader;
