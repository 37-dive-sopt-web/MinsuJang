import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const topWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});
