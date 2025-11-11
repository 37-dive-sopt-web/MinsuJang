import * as React from 'react';
import type { RecipeVariants, RuntimeFn } from '@vanilla-extract/recipes';

export interface ChildrenProps {
  children: React.ReactNode;
}

export type PartialVariants<T extends RuntimeFn<Record<string, any>>> = Partial<RecipeVariants<T>>;
