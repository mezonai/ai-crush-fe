import React from 'react';
import RootLayout from '@/layouts/Root';

const HomePage: React.FC = () => {
  return (
    <RootLayout>
      <div className='bg-[url("images/main-bg.png")] flex flex-col justify-center items-center w-full h-full text-black bg-white p-4'>
        <div className="relative w-full text-center">
          <div className="absolute left-0 top-[-200px] w-full flex justify-center">
            <img src="/images/heart-logo.png" />
          </div>
          <p className="absolute top-[-70px] font-semibold text-2xl text-center w-full text-[#414651]">Home Page</p>
          <h1 className="text-rose-primary font-bold">AI Crush</h1>
        </div>
      </div>
    </RootLayout>
  );
};

export default HomePage;
