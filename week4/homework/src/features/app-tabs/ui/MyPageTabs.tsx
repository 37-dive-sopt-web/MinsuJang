import TabList from '@shared/ui/TabList.tsx';
import { useRouteTab } from '@features/app-tabs/model/useRouteTab.ts';
import { MY_PAGE_TABS } from '@features/app-tabs/config/myPageTab.ts';
import type { MyPageTabKey } from '@features/app-tabs/model/type.ts';
import { LogoutModal, WithdrawalModal } from '@features/auth/ui';
import { overlay } from 'overlay-kit';

const MyPageTabs = () => {
  const { isActive, handleClickTab } = useRouteTab();

  const handleClick = (tabKey: MyPageTabKey, path?: string) => {
    if (tabKey === 'LOGOUT') {
      return overlay.open(({ isOpen, close }) => <LogoutModal open={isOpen} onClose={close} />);
    }

    if (tabKey === 'DELETE') {
      return overlay.open(({ isOpen, close }) => <WithdrawalModal open={isOpen} onClose={close} />);
    }

    handleClickTab(path);
  };

  return (
    <TabList>
      {MY_PAGE_TABS.map((tab) => (
        <TabList.Item
          key={tab.id}
          label={tab.label}
          isActive={isActive(tab.path)}
          onClick={() => handleClick(tab.id, tab.path)}
        />
      ))}
    </TabList>
  );
};

export default MyPageTabs;
