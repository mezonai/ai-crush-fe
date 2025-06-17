import { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';
import { Outlet } from 'react-router-dom';
import RootLayout from '../Root';
import BaseLayout from '../BaseLayout';
import Header from './Header';
import Footer from './Footer';

const HomeLayout: React.FC = () => {
  const getUserDetail = useUserStore((state) => state.getUser);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    getUserDetail();
  }, [getUserDetail]);

  return (
    <RootLayout>
      <BaseLayout>
        {user && (
          <>
            <Header
              avatarSrc={user.avatarUrl}
              userName={user.userName}
              gameTurnCount={user.gameTurns ?? 0}
              tokenCount={+(user.tokenBalance ?? '0')}
            />
            <Outlet />
            <Footer />
          </>
        )}
      </BaseLayout>
    </RootLayout>
  );
};

export default HomeLayout;
