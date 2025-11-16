import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: vars.space.lg,
});

export const endAdornmentWrapper = style({
  width: 'fit-content',
  position: 'absolute',
  transform: 'translateY(50%) translateX(1830%)',
  cursor: 'pointer',
});
