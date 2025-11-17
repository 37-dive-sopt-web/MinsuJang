import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/token.css.ts';

export const inputBase = recipe({
  base: {
    width: '100%',
    padding: `${vars.space.sm} ${vars.space.md}`,
    borderRadius: vars.radius.md,
    border: `1px solid ${vars.color.secondary}`,
    outline: 'none',
    transition: 'border-color 0.2s ease-in-out',
    color: vars.color.foreground,
    backgroundColor: vars.color.background,

    selectors: {
      '&:focus': {
        borderColor: vars.color.primary,
      },
      '&::placeholder': {
        color: vars.color.secondary,
      },
    },
  },

  variants: {
    tone: {
      default: {},
      error: {
        borderColor: 'red',
      },
      success: {
        borderColor: vars.color.accent,
      },
    },
    fontSize: {
      sm: { fontSize: vars.size.sm },
      md: { fontSize: vars.size.md },
      lg: { fontSize: vars.size.lg },
    },
    emptyAdornment: {
      false: {
        paddingRight: vars.space.xl,
      },
    },
  },

  defaultVariants: {
    tone: 'default',
    fontSize: 'md',
    emptyAdornment: true,
  },
});
