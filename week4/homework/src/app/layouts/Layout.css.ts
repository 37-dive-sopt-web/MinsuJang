import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const authLayoutWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100dvh',
  width: vars.layout.maxWidth,
  margin: '0 auto',
  backgroundColor: vars.color.background,
});
