import type { ChildrenProps } from '@shared/types/common.ts';
import { EyeClosed, EyeIcon } from 'lucide-react';
import Button from '@shared/ui/Button.tsx';
import Label from '@shared/ui/Label.tsx';
import Input from '@shared/ui/Input.tsx';
import * as S from '@features/auth/ui/LoginForm.css.ts';
import Column from '@shared/ui/Column.tsx';
import { useState } from 'react';
import { vars } from '@shared/styles/token.css.ts';
import { endAdornmentWrapper } from '@features/auth/ui/LoginForm.css.ts';

type LoginFormProps = ChildrenProps;
type LoginFormButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};
type FieldProps = {
  label: string;
  id: string;
  placeholder: string;
  type?: 'text' | 'password';
};

const LoginFormRoot = ({ children }: LoginFormProps) => {
  return <form className={S.loginFormWrapper}>{children}</form>;
};

const LoginFormButton = ({ label, onClick, disabled }: LoginFormButtonProps) => {
  return (
    <Button
      tone={disabled ? 'secondary' : 'primary'}
      label={label}
      fullWidth={true}
      size='md'
      onClick={onClick}
      disabled={disabled}
    />
  );
};

const LoginFormField = ({ label, id, placeholder, type }: FieldProps) => {
  return (
    <Column>
      <Label htmlFor={id} label={label} />
      <Input id={id} label={label} placeholder={placeholder} type={type} />
    </Column>
  );
};

const LoginFormPasswordField = ({ label, id, placeholder }: Exclude<FieldProps, 'type'>) => {
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

const LoginForm = Object.assign(LoginFormRoot, {
  Button: LoginFormButton,
  Field: LoginFormField,
  PasswordField: LoginFormPasswordField,
});

export default LoginForm;
