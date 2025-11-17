import { vars } from '@shared/styles/token.css.ts';
import { style } from '@vanilla-extract/css';

export const headerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.lg} ${vars.space.xl}`,
  borderBottom: `0.5px solid ${vars.color.accent}`,
});
