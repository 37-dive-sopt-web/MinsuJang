import { createTheme } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const baseTheme = createTheme(vars, {
  color: {
    background: '#ffffff',
    foreground: '#1f2937',
    primary: '#2563eb',
    secondary: '#64748b',
    accent: '#10b981',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  font: {
    body: 'system-ui, sans-serif',
    mono: 'monospace',
  },
  size: {
    sm: '14px',
    md: '16px',
    lg: '20px',
  },
});
