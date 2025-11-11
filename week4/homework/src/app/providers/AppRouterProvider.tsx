import { RouterProvider } from 'react-router-dom';
import { router } from '@app/route/Router.tsx';

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};
