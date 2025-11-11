import { createBrowserRouter } from 'react-router';
import ProtectedLayout from '@app/layouts/ProtectedLayout.tsx';
import AuthLayout from '@app/layouts/AuthLayout.tsx';
import MyPage from '@pages/my/ui/MyPage.tsx';
import MembersPage from '@pages/members/ui/MembersPage.tsx';
import { Navigate } from 'react-router-dom';
import NotFoundPage from '@pages/common/ui/NotFoundPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='my' replace />,
      },
      {
        path: 'my',
        element: <MyPage />,
      },
      {
        path: 'members',
        element: <MembersPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthLayout />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
