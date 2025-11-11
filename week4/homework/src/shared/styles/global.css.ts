import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

globalStyle('*, *::before, *::after', { boxSizing: 'border-box' });
globalStyle('html', { scrollbarWidth: 'none' });
globalStyle('html::-webkit-scrollbar', { display: 'none' });
globalStyle('html, body, #root', { width: '100%', height: '100dvh' });
globalStyle('body', {
  margin: 0,
  backgroundColor: vars.color.background,
  color: vars.color.foreground,
  fontFamily: vars.font.body,
  fontSize: vars.size.md,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  overflowX: 'hidden',
  overscrollBehavior: 'none',
});

globalStyle('button', {
  cursor: 'pointer',
  padding: 0,
  margin: 0,
  background: 'none',
  border: 'none',
  font: 'inherit',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  fontWeight: 600,
  lineHeight: 1.2,
  color: vars.color.foreground,
});

globalStyle('img, svg, button', { userSelect: 'none' });

globalStyle('a', { color: 'inherit', textDecoration: 'none' });
