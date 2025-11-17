import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/token.css.ts';
import { style } from '@vanilla-extract/css';

export const tabListWrapper = style({
  display: 'flex',
  gap: vars.space.sm,
});

export const tabButton = recipe({
  base: {
    padding: vars.space.xs,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: vars.color.secondary,
    ':hover': {
      color: vars.color.accent,
      transition: 'color 0.2s ease-in-out',
    },
  },
  variants: {
    isActive: {
      true: {
        fontWeight: 'bold',
        color: vars.color.accent,
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});
