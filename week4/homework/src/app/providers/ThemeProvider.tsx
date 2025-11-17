import type { ChildrenProps } from '@shared/types/common.ts';
import { baseTheme } from '@shared/styles/theme.css.ts';

export const ThemeProvider = ({ children }: ChildrenProps) => {
  return <div id='theme-root' className={baseTheme}>{children}</div>;
};
