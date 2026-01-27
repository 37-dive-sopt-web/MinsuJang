import { create } from 'zustand/react';

type TabState<T> = {
  currentTab: T;
  handleTabChange: (tab: T) => void;
};

export const createTabStore = <T>(initialTab: T) =>
  create<TabState<T>>((set) => ({
    currentTab: initialTab,
    handleTabChange: (tab) => set({ currentTab: tab }),
  }));
