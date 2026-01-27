import { headerWrapper } from '@shared/ui/Header.css.ts';
import type { ChildrenProps } from '@shared/types/common.ts';
import clsx from 'clsx';

type HeaderProps = ChildrenProps & {
  className?: string;
};

const HeaderRoot = ({ children, className }: HeaderProps) => {
  return <header className={clsx(headerWrapper, className)}>{children}</header>;
};

export default HeaderRoot;
