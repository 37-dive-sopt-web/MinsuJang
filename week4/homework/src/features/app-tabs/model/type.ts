import type { MY_PAGE_TABS } from '@features/app-tabs/config/myPageTab.ts';

export type Type = (typeof MY_PAGE_TABS)[number];
export type MyPageTabKey = (typeof MY_PAGE_TABS)[number]['id'];
