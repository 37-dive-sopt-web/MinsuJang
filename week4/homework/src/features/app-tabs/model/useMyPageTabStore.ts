import type { MyPageTabKey } from '@features/app-tabs/model/type.ts';
import { createTabStore } from '@shared/model/craeteTabStore.ts';

export const useMyPageTabStore = createTabStore<MyPageTabKey>('INFO');
