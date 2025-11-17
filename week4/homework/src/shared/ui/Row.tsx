import { rowWrapper } from '@shared/ui/Row.css.ts';
import type { ChildrenProps, PartialVariants } from '@shared/types/common.ts';

type RowProps = ChildrenProps & PartialVariants<typeof rowWrapper>;
const Row = ({ children, fullWidth, justify, align, spacing }: RowProps) => {
  return (
    <div
      className={rowWrapper({
        fullWidth: fullWidth,
        justify: justify,
        align: align,
        spacing: spacing,
      })}
    >
      {children}
    </div>
  );
};

export default Row;
