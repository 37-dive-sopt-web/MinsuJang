import type { ChildrenProps } from '@shared/types/common.ts';
import Button from '@shared/ui/Button.tsx';
import Label from '@shared/ui/Label.tsx';
import Input from '@shared/ui/Input.tsx';
import * as S from '@features/auth/ui/LoginForm.css.ts';
import Column from '@shared/ui/Column.tsx';

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

const LoginForm = Object.assign(LoginFormRoot, {
  Button: LoginFormButton,
  Field: LoginFormField,
});

export default LoginForm;
