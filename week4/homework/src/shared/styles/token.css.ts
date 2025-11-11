import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    background: null,
    foreground: null,
    primary: null,
    secondary: null,
    accent: null,
  },
  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
  },
  font: {
    body: null,
    mono: null,
  },
  size: {
    sm: null,
    md: null,
    lg: null,
  },
});
