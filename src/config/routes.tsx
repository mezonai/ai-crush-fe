import { createBrowserRouter, Outlet } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import ProtectedRoute from '../components/protectedRoute';
import ErrorPage from '../components/ErrorPage';

const Root: React.FC = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
      {
        path: '/test',
        element: (
            <Welcome />
        ),
      },
    ],
  },
]);

export default router;
