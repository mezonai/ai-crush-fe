import React from 'react';
import baseBg from '@assets/backgounds/base_bg.jpg';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-cover bg-center justify-between h-full w-full px-4"
      style={{ backgroundImage: `url(${baseBg})` }}>
      {children}
    </div>
  );
};

export default BaseLayout;
