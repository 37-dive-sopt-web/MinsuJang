import { useLocation, useNavigate } from 'react-router';

export const useRouteTab = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickTab = (path?: string) => {
    if (!path) return;
    navigate(path);
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return { isActive, handleClickTab };
};
