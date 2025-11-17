import type { ChildrenProps } from '@shared/types/common.ts';
import { EyeClosed, EyeIcon } from 'lucide-react';
import * as S from '@shared/ui/Form.css.ts';
import React, { useState } from 'react';
import { vars } from '@shared/styles/token.css.ts';
import { endAdornmentWrapper } from '@shared/ui/Form.css.ts';
import { Button, Column, Input, Label } from '@shared/ui/index.ts';

type FormProps = ChildrenProps & {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

type FormButtonProps = {
  label: string;
  disabled?: boolean;
  type?: 'submit' | 'button';
};

type FieldProps = {
  label: string;
  id: string;
  placeholder: string;
  value?: string | number | undefined;
  type?: 'text' | 'password' | 'email' | 'number';
};

const FormRoot = ({ children, onSubmit }: FormProps) => {
  return (
    <form className={S.formWrapper} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

const FormButton = ({ label, disabled, type }: FormButtonProps) => {
  return (
    <Button
      tone={disabled ? 'secondary' : 'primary'}
      label={label}
      fullWidth={true}
      size='md'
      disabled={disabled}
      type={type}
    />
  );
};

const FormField = ({ label, id, placeholder, type }: FieldProps) => {
  return (
    <Column>
      <Label htmlFor={id} label={label} />
      <Input id={id} label={label} placeholder={placeholder} type={type} />
    </Column>
  );
};

const FormPasswordField = ({ label, id, placeholder, value }: Exclude<FieldProps, 'type'>) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);
  const tooltip = visible ? '비밀번호 숨기기' : '비밀번호 표시';
  const type = visible ? 'text' : 'password';

  const renderEye = () => {
    if (!visible) {
      return <EyeIcon color={vars.color.primary} />;
    }
    return <EyeClosed color={vars.color.primary} />;
  };

  return (
    <Column>
      <Label htmlFor={id} label={label} />
      <Input
        id={id}
        label={label}
        placeholder={placeholder}
        type={type}
        value={value}
        render={
          <button
            type={'button'}
            onClick={toggleVisible}
            aria-label={tooltip}
            className={endAdornmentWrapper}
          >
            {renderEye()}
          </button>
        }
      />
    </Column>
  );
};

const Form = Object.assign(FormRoot, {
  Button: FormButton,
  Field: FormField,
  PasswordField: FormPasswordField,
});

export default Form;
