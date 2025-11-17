import Form from '@shared/ui/Form.tsx';
import { useForm } from 'react-hook-form';
import { type LoginFormValues, loginSchema } from '@features/auth/model/authSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Text } from '@shared/ui';
import { usePostLogin } from '@features/auth/model/usePostLogin.ts';
import { overlay } from 'overlay-kit';
import Modal from '@shared/ui/Modal.tsx';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });
  const { mutate, error } = usePostLogin();

  const onSubmit = (data: LoginFormValues) => {
    mutate(data);
    renderErrorAlert();
  };

  const renderErrorAlert = () =>
    error &&
    overlay.open(({ isOpen, close }) => (
      <Modal open={isOpen} onClose={close}>
        <Text.Strong font={'heading'} color='red'>
          {error.message}
        </Text.Strong>
        <Button label='확인' type='button' onClick={close} />
      </Modal>
    ));

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field
        label='아이디'
        id='login-id'
        placeholder='아이디를 입력해 주세요'
        type='text'
        {...register('username')}
      />
      {errors.username?.message && (
        <Text.Strong font={'body'} color='red'>
          {errors.username?.message}
        </Text.Strong>
      )}
      <Form.PasswordField
        label='비밀번호'
        id='login-passowrd'
        placeholder='비밀번호를 입력해 주세요'
        {...register('password')}
      />
      {errors.password?.message && (
        <Text.Strong font={'body'} color='red'>
          {errors.password.message}
        </Text.Strong>
      )}
      <Form.Button label='로그인' disabled={!isValid} type='submit' />
    </Form>
  );
};

export default LoginForm;
