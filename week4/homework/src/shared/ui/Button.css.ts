import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/token.css.ts';

export const buttonBase = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${vars.space.md} ${vars.space.md}`,
    borderRadius: vars.radius.md,
    border: 'none',
    fontSize: vars.size.md,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    color: vars.color.background,
  },

  variants: {
    tone: {
      primary: {
        background: vars.color.primary,
        color: vars.color.background,
        selectors: {
          '&:hover': {
            background: vars.color.accent,
          },
        },
      },
      secondary: {
        background: vars.color.secondary,
        color: vars.color.background,
      },
    },
    size: {
      sm: { fontSize: vars.size.sm },
      md: { fontSize: vars.size.md },
      lg: { fontSize: vars.size.lg },
    },
    fullWidth: {
      true: { width: '100%' },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  },

  defaultVariants: {
    tone: 'primary',
    size: 'md',
  },
});
