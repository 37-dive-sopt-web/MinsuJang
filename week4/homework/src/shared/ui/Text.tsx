import type { ChildrenProps, FontKey } from '@shared/types/common.ts';
import { fonts } from '@shared/styles/fonts.css.ts';

type TextProps = ChildrenProps & {
  font: FontKey;
};

const Text = ({ children, font }: TextProps) => {
  return <p className={fonts[font]}>{children}</p>;
};

const Strong = ({ children, font }: TextProps) => {
  return <strong className={fonts[font]}>{children}</strong>;
};

export default Object.assign(Text, { Strong: Strong });
