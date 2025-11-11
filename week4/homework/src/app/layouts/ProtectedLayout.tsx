import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  return (
    <>
      <header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
