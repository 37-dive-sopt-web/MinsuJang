import { useState } from "react";

const isContainTab = (tabList, tab) => {
  return tabList.includes(tab);
};

export const useHandleTab = (tabList, initialTab) => {
  const [currentTab, setCurrentTab] = useState(initialTab);

  if (!isContainTab(tabList, initialTab)) {
    console.error(`${tabList}에 포함되지 않는 탭입니다. - ${initialTab}`);
  }

  const changeTab = (tab) => {
    if (!isContainTab(tabList, tab)) {
      return;
    }
    if (tab === currentTab) {
      return;
    }
    setCurrentTab(tab);
  };

  const isCurrent = (tab) => {
    return tab === currentTab;
  };

  return { currentTab, changeTab, isCurrent };
};
