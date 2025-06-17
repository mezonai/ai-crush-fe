import { createBrowserRouter, Outlet } from 'react-router-dom';
import Welcome from '@pages/Welcome';
import RegisterPage from '@pages/Register';
// import ProtectedRoute from '@components/protectedRoute';
import LoginPage from '@/pages/Login';
import ErrorPage from '@/pages/Error';
import InitPage from '@/pages/Initial';
import Home from '@/pages/Home';
import GameIntro from '@/pages/GameIntro';
import ListCharactersPage from '@/pages/ListCharacters';

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
        element: <InitPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/game-intro',
        element: <GameIntro />,
      },
      {
        path: '/list-characters',
        element: <ListCharactersPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
