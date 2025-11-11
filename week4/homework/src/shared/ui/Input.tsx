import React from 'react';
import type { PartialVariants } from '@shared/types/common.ts';
import { inputBase } from '@shared/ui/Input.css.ts';
import clsx from 'clsx';
import { fonts } from '@shared/styles/fonts.css.ts';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  PartialVariants<typeof inputBase> & {
    label: string;
  };

const Input = ({ tone, size, ...rest }: InputProps) => {
  return <input className={clsx(inputBase({ tone: tone, size: size }), fonts.body)} {...rest} />;
};

export default Input;
