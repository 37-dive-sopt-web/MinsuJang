import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/token.css.ts';

export const rowWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: vars.space.sm,
  },
  variants: {
    spacing: {
      xs: { gap: vars.space.xs },
      sm: { gap: vars.space.sm },
      md: { gap: vars.space.md },
      lg: { gap: vars.space.lg },
      xl: { gap: vars.space.xl },
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    spacing: 'xs',
    justify: 'center',
    fullWidth: false,
  },
});
