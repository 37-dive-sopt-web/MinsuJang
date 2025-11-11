import React from 'react';
import { buttonBase } from '@shared/ui/Button.css.ts';
import clsx from 'clsx';
import { fonts } from '@shared/styles/fonts.css.ts';
import type { PartialVariants } from '@shared/types/common.ts';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PartialVariants<typeof buttonBase> & {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
  };

const Button = ({
  label,
  size,
  tone,
  fullWidth,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        buttonBase({ tone: tone, size: size, fullWidth: fullWidth, disabled: disabled }),
        fonts.body,
      )}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
