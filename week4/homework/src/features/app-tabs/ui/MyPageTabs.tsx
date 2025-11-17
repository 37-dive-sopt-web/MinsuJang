import TabList from '@shared/ui/TabList.tsx';
import { useRouteTab } from '@features/app-tabs/model/useRouteTab.ts';
import { MY_PAGE_TABS } from '@features/app-tabs/config/mPageTab.ts';

const MyPageTabs = () => {
  const { isActive, handleClickTab } = useRouteTab();

  return (
    <TabList>
      {MY_PAGE_TABS.map((tab) => (
        <TabList.Item
          key={tab.id}
          label={tab.label}
          isActive={isActive(tab.path)}
          onClick={() => handleClickTab(tab.path)}
        />
      ))}
    </TabList>
  );
};

export default MyPageTabs;
