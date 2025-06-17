import React, { useEffect } from 'react';
import BaseLayout from '@/layouts/BaseLayout';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { useUserStore } from '@/store/userStore';
import RootLayout from '@/layouts/Root';

const HomePage: React.FC = () => {
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
            <MainContent />
            <Footer />
          </>
        )}
      </BaseLayout>
    </RootLayout>
  );
};

export default HomePage;
