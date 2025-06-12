import {createBrowserRouter, Outlet} from 'react-router-dom';
import Welcome from '../pages/Welcome';
import ProtectedRoute from '../components/protectedRoute';
import GameIntro from "../pages/GameIntro";

const Root: React.FC = () => {
  return <Outlet/>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <Welcome/>
          </ProtectedRoute>
        ),
      },
      {
        path: '/welcome',
        element: (
          <ProtectedRoute>
            <Welcome/>
          </ProtectedRoute>
        ),
      },
      {
        path: '/game-intro',
        element: (
          <GameIntro/>
        ),
      },
    ],
  },
]);

export default router;
