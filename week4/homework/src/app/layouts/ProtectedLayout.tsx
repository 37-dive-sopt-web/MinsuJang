import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  return (
    <div>
      <header />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
