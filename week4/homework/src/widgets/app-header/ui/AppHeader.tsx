import Header from '@shared/ui/Header.tsx';
import { Top } from '@shared/ui';
import MyPageTabs from '@features/app-tabs/ui/MyPageTabs.tsx';
import { useAuthStore } from '@shared/model/useAuthStore.ts';

const AppHeader = () => {
  const { name } = useAuthStore();
  return (
    <Header>
      <Top>
        <Top.TitleParagraph>마이페이지</Top.TitleParagraph>
        <Top.SubTitleParagraph>{`안녕하세요, ${name ? name : '정체불영의 사용자'}님`}</Top.SubTitleParagraph>
      </Top>
      <MyPageTabs />
    </Header>
  );
};

export default AppHeader;
