import React from 'react';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';
import { Link } from 'react-router';
import RootLayout from '@/layouts/Root';

const WelcomePage: React.FC = () => {
  return (
    <RootLayout>
      <div className='bg-[url("images/main-bg.png")] flex flex-col justify-center items-center w-full h-full text-black bg-white p-4'>
        <div className="relative w-full text-center">
          <div className='absolute left-0 top-[-200px] w-full flex justify-center'>
            <img src="/images/heart-logo.png" />
          </div>
          <p className="absolute top-[-70px] font-semibold text-2xl text-center w-full text-[#414651]">
            Chào mừng bạn đến với
          </p>
          <h1 className="text-rose-primary font-bold">AI Crush</h1>

          <Link to="/register">
            <Button className="absolute bottom-[-100px] left-1/2 -translate-x-1/2">
              Bắt đầu
            </Button>
          </Link>

          <Alert className="absolute bottom-[-180px]">
            Your smile caught my eye from way over here{' '}
            <Button className="bg-rose-primary ml-2" size={'sm'}>
              <img src="/icons/send-icon.svg" />
            </Button>
          </Alert>

          <p className="absolute text-[#414651] bottom-[-240px] text-center w-full">
            Version 1.0
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default WelcomePage;
