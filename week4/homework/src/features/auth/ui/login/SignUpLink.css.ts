import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const linkTextStyle = style({
  width: 'fit-content',
  textDecoration: 'none',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  background: 'transparent',
  color: vars.color.primary,
  cursor: 'pointer',
  margin: '0 auto',
  transition: 'background-color 0.2s ease-in-out',
});
