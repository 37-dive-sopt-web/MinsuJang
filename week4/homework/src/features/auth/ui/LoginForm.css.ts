import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const loginFormWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: vars.space.lg,
});
