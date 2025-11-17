import { Outlet } from 'react-router-dom';
import { protectedLayoutWrapper } from '@app/layouts/Layout.css.ts';
import AppHeader from '@widgets/app-header/ui/AppHeader.tsx';
import { useAuthStore } from '@shared/model/useAuthStore.ts';

const ProtectedLayout = () => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    window.location.href = '/auth/login';
  }

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
