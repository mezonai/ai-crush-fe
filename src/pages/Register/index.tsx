import React, { useEffect, useState } from 'react';
import RegisterForm from './components/RegisterForm';
import RootLayout from '@/layouts/Root';
import { useSearchParams } from 'react-router-dom';
import type { RegisterFormInput } from './forms/schema';
import { createUser, getUserFavorites } from '@/services/user';
import { useNavigate } from 'react-router';
import { useAuth } from '@/hooks/useAuth';

const RegisterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const avatarUrl = searchParams.get('avatarUrl') || '';
  const email = searchParams.get('email') || '';
  const identityId = searchParams.get('identityId') || '';
  const webAppData = searchParams.get('webAppData') || '';

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
      const result = await createUser({
        ...formData,
        age: Number(formData.age),
        favorites: JSON.stringify(formData.favorites),
      });
      if (result.data) {
        login({
          accessToken: result.data.accessToken,
          refreshToken: result.data.refreshToken,
        });
        navigate('/game-intro');
      }
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
