import type { ChildrenProps, PartialVariants } from '@shared/types/common.ts';
import { columnWrapper } from '@shared/ui/Column.css.ts';

type ColumnProps = ChildrenProps & PartialVariants<typeof columnWrapper> & {};

const Column = ({ spacing, align, justify, children, fullWidth }: ColumnProps) => {
  return (
    <div
      className={columnWrapper({
        spacing: spacing,
        align: align,
        justify: justify,
        fullWidth: fullWidth,
      })}
    >
      {children}
    </div>
  );
};

export default Column;
