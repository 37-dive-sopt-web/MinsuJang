import React from 'react';
import type { PartialVariants } from '@shared/types/common.ts';
import { inputBase } from '@shared/ui/Input.css.ts';
import clsx from 'clsx';
import { fonts } from '@shared/styles/fonts.css.ts';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  PartialVariants<typeof inputBase> & {
    label: string;
    render?: React.ReactNode;
  };

const Input = ({ tone, size, render, ...rest }: InputProps) => {
  return (
    <>
      <input
        className={clsx(inputBase({ tone: tone, size: size, emptyAdornment: !render }), fonts.body)}
        {...rest}
      />
      {render}
    </>
  );
};

export default Input;
