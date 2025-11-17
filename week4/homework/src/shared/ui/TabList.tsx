import type { ChildrenProps } from '@shared/types/common.ts';
import { tabButton, tabListWrapper } from '@shared/ui/TabList.css.ts';
import clsx from 'clsx';

type TabListProps = ChildrenProps & {
  className?: string;
};

type TabItemProps = { className?: string; label: string; onClick?: () => void; isActive?: boolean };

const TabListRoot = ({ children, className }: TabListProps) => {
  return (
    <div role='tablist' className={clsx(tabListWrapper, className)}>
      {children}
    </div>
  );
};

const TabItem = ({ label, onClick, isActive, className }: TabItemProps) => {
  return (
    <button
      className={clsx(tabButton({ isActive: isActive }), className)}
      role='tab'
      onClick={onClick}
      type='button'
      aria-label={label}
      aria-selected={isActive}
    >
      {label}
    </button>
  );
};

const TabList = Object.assign(TabListRoot, { Item: TabItem });

export default TabList;
