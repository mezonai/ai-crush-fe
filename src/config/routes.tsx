import { createBrowserRouter, Outlet } from 'react-router-dom';
import Welcome from '@pages/Welcome';
import ReisgerPage from '@pages/Register';
import ProtectedRoute from '@components/protectedRoute';

const Root: React.FC = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/register',
        element: <ReisgerPage />,
      },
    ],
  },
]);

export default router;
