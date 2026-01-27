import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

const font = {
  pretendard:
    "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
};

const fontBody = style({
  fontFamily: font.pretendard,
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.size.md,
  lineHeight: 1.6,
});

const fontHeading = style({
  fontFamily: font.pretendard,
  fontWeight: vars.fontWeight.bigBold,
  fontSize: vars.size.lg,
  lineHeight: 1.3,
});

const fontSubheading = style({
  fontFamily: font.pretendard,
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.size.md,
  lineHeight: 1.4,
});

const fontCaption = style({
  fontFamily: font.pretendard,
  fontWeight: vars.fontWeight.medium,
  fontSize: vars.size.sm,
  lineHeight: 1.4,
});

const fontMono = style({
  fontFamily: font.pretendard,
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.size.sm,
  letterSpacing: '0.02em',
});

export const fonts = {
  body: fontBody,
  heading: fontHeading,
  subheading: fontSubheading,
  caption: fontCaption,
  mono: fontMono,
};
