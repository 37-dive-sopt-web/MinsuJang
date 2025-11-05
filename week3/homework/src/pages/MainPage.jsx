import RootLayout from "../app/layouts/RootLayout.jsx";
import { TAB, TAB_LABEL, tabList } from "../const/tab.js";
import Header from "../components/common/Header.jsx";
import { useHandleTab } from "../features/useHandleTab.js";
import Game from "../components/game/Game.jsx";
import Rank from "../components/rank/Rank.jsx";
import styled from "@emotion/styled";
import { HEADER_TITLE } from "../const/header.js";

const MainPage = () => {
  const { currentTab, changeTab, isCurrent } = useHandleTab(tabList, TAB.GAME);

  return (
    <RootLayout>
      <Header>
        <Header.Title title={HEADER_TITLE.MAIN} />
        <Header.Tabs
          tabList={tabList}
          handleChangeTab={changeTab}
          tabLabel={TAB_LABEL}
          isCurrent={isCurrent}
        />
      </Header>
      <MainContent>
        {(currentTab === TAB.GAME) && <Game />}
        {(currentTab === TAB.RANK) && <Rank />}
      </MainContent>
    </RootLayout>
  );
};

export default MainPage;

const MainContent = styled.section`
  background-color: ${({ theme }) => theme.colors.primary.primary200};
  border-radius: 10px;
  min-width: 400px;
  height: 100%;
`;
