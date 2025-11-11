import { Outlet } from 'react-router-dom';
import { authLayoutWrapper } from '@app/layouts/Layout.css.ts';

const AuthLayout = () => (
  <main className={authLayoutWrapper}>
    <Outlet />
  </main>
);

export default AuthLayout;
