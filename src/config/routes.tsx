import { createBrowserRouter, Outlet } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import ProtectedRoute from '../components/protectedRoute';

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
        element: (
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        ),
      },
      {
        path: '/welcome',
        element: (
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
