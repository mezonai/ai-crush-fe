import { createBrowserRouter, Outlet } from 'react-router-dom';
import Welcome from '@pages/Welcome';
import RegisterPage from '@pages/Register';
// import ProtectedRoute from '@components/protectedRoute';
import LoginPage from '@/pages/Login';
import ErrorPage from '@/pages/Error';
import InitPage from '@/pages/Initial';
import Home from '@/pages/Home';
import GameIntro from '@/pages/GameIntro';
import Characters from '@pages/Characters';
import CharacterDetail from '@pages/CharacterDetail';

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
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: '/game-intro/:step',
        element: <GameIntro />,
      },
      {
        path: '/game-intro',
        element: <GameIntro />,
      },
      {
        path: '/characters',
        element: <Characters />,
      },
      {
        path: '/characters/:character_id',
        element: <CharacterDetail />,
      },
    ],
  },
]);

export default router;
