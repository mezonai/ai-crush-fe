import React, { useEffect, useState } from 'react';
import RegisterForm from './components/RegisterForm';
import RootLayout from '@/layouts/Root';
import { useSearchParams } from 'react-router-dom';
import type { RegisterFormInput } from './forms/schema';
import { createUser, getUserFavorites } from '@/services/user';
import { useNavigate } from "react-router";

const RegisterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const avatarUrl =
    searchParams.get('avatarUrl') ||
    'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg';
  const email = searchParams.get('email') || 'tuan.vuthanh@ncc.asia';
  const identityId = searchParams.get('identityId') || '12324324234';
  const webAppData = searchParams.get('webAppData') || 'test';

  const [favorites, setFavorites] = useState<
    {
      id: number;
      value: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getUserFavorites();
        if (!response.data) {
          console.error('No favorites data found');
          return;
        }
        setFavorites([...response.data.favorites]);
      } catch (error) {
        console.error('Failed to fetch user favorites:', error);
      }
    };
    fetchFavorites();
  }, []);

  const onSubmit = async (formData: RegisterFormInput) => {
    try {
      createUser({
        ...formData,
        age: Number(formData.age),
        favorites: JSON.stringify(formData.favorites),
      });
      navigate('/home');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <RootLayout>
      <div className='bg-[url("images/main-bg.png")] flex flex-col w-full h-full bg-white p-4'>
        <div className="w-full h-full">
          <RegisterForm
            onSubmit={onSubmit}
            userInformation={{ avatarUrl, email, identityId, webAppData }}
            userFavorites={favorites}
          />
        </div>
      </div>
    </RootLayout>
  );
};

export default RegisterPage;
