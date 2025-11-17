import type { ChildrenProps } from '@shared/types/common.ts';
import { fonts } from '@shared/styles/fonts.css.ts';
import { topWrapper } from '@shared/ui/Top.css.ts';

type TopProps = ChildrenProps;
type HeadingProps = ChildrenProps;

const TopRoot = ({ children }: TopProps) => {
  return <div className={topWrapper}>{children}</div>;
};

const TitleParagraph = ({ children }: HeadingProps) => {
  return <h1 className={fonts.heading}>{children}</h1>;
};

const SubTitleParagraph = ({ children }: HeadingProps) => {
  return <p className={fonts.body}>{children}</p>;
};

const Top = Object.assign(TopRoot, { TitleParagraph, SubTitleParagraph });

export default Top;
