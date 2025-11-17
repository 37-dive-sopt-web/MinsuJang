import * as React from 'react';
import type { RecipeVariants, RuntimeFn } from '@vanilla-extract/recipes';
import type { fonts } from '@shared/styles/fonts.css.ts';

export interface ChildrenProps {
  children: React.ReactNode;
}

export type PartialVariants<T extends RuntimeFn<Record<string, any>>> = Partial<RecipeVariants<T>>;

export type FontKey = keyof typeof fonts;
