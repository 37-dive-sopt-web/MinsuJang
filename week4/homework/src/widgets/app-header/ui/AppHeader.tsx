import Header from '@shared/ui/Header.tsx';
import { Top } from '@shared/ui';
import MyPageTabs from '@features/app-tabs/ui/MyPageTabs.tsx';

const AppHeader = () => {
  return (
    <Header>
      <Top>
        <Top.TitleParagraph>마이페이지</Top.TitleParagraph>
        <Top.SubTitleParagraph>{`안녕하세요, ${'장민수'}님`}</Top.SubTitleParagraph>
      </Top>
      <MyPageTabs />
    </Header>
  );
};

export default AppHeader;
