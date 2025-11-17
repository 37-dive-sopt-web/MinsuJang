import type { ChildrenProps, FontKey } from '@shared/types/common.ts';
import { fonts } from '@shared/styles/fonts.css.ts';
import clsx from 'clsx';

type TextProps = ChildrenProps & {
  font: FontKey;
  color?: string;
};

const Text = ({ children, font }: TextProps) => {
  return <p className={fonts[font]}>{children}</p>;
};

const Strong = ({ children, font, color }: TextProps) => {
  return (
    <strong className={clsx(fonts[font])} style={{ color }}>
      {children}
    </strong>
  );
};

export default Object.assign(Text, { Strong: Strong });
