import React, { type ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[430px] min-h-screen mx-auto flex">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default RootLayout;
