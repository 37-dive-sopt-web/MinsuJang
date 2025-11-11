import Button from '@shared/ui/Button.tsx';

const LoginPage = () => {
  const handleLogin = () => {};

  const disabled = false;
  return (
    <>
      <Button
        tone={disabled ? 'secondary' : 'primary'}
        label='로그인'
        fullWidth={true}
        size='md'
        onClick={handleLogin}
        disabled={disabled}
      />
    </>
  );
};

export default LoginPage;
