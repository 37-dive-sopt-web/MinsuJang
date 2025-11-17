import { Outlet } from 'react-router-dom';
import { protectedLayoutWrapper } from '@app/layouts/Layout.css.ts';
import AppHeader from '@widgets/app-header/ui/AppHeader.tsx';

const ProtectedLayout = () => {
  return (
    <>
      <AppHeader />
      <main className={protectedLayoutWrapper}>
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
