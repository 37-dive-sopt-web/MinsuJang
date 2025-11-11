import { Link } from 'react-router-dom';
import { linkTextStyle } from '@features/auth/ui/SignUpLink.css.ts';

const SignUpLink = () => {
  return <Link to='/auth/sign-up' className={linkTextStyle}>회원가입</Link>;
};

export default SignUpLink;
