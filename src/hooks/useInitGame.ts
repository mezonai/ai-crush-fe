import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import type { IMezonAppUserHashInfo, IMezonAppUserInfo } from '../types/common';
import { isUserExists, loginMezon } from '@/services/user';
import {
  MezonAppEvent,
  MezonWebViewEvent,
} from '../mezon-web-sdk/webview/types.d';
import { useAuth } from './useAuth';


const useInitGame = () => {
  const { token, login } = useAuth();
  const navigate = useNavigate();

  const userHashInfoEventHandler = async (
    _type: string,
    data?: IMezonAppUserHashInfo,
    appData?: IMezonAppUserInfo
  ) => {
    if (data && appData?.user.id) {
      const webAppData = data.message.web_app_data;
      const isUserExisted: boolean =
        (await isUserExists(appData?.user.id)) || false;
      if (isUserExisted) {
        const { data: jwt } = await loginMezon({ web_app_data: webAppData });
        if (jwt) {
          login(jwt);
          navigate('/welcome');
        }
      } else {
        // call API to create new user with webAppData and login
        const queryParams = new URLSearchParams();
        queryParams.append('webAppData', webAppData);
        queryParams.append('email', appData?.email || '');
        queryParams.append('avatarUrl', appData?.user.avatar_url || '');
        queryParams.append('identityId', appData?.user.id || '');
        navigate(`/welcome?isNew=true&${queryParams.toString()}`);
      }
    }
  };

  const userInfoEventHandler = async (
    _type: string,
    appData?: IMezonAppUserInfo
  ) => {
    try {
      if (!appData) {
        navigate('/login');
        return;
      }
      const userId = appData.user?.id;
      if (!userId) throw new Error('No userId');

      window.Mezon.WebView?.onEvent<IMezonAppUserHashInfo>(
        MezonAppEvent.UserHashInfo,
        (type: string, data?: IMezonAppUserHashInfo) => {
          userHashInfoEventHandler(type, data, appData);
        }
      );
    } catch (error) {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/welcome');
      return;
    }

    if (window.Mezon?.WebView) {
      window.Mezon.WebView.postEvent(MezonWebViewEvent.Ping, {
        message: 'Hello Mezon!',
      });

      window.Mezon.WebView.onEvent(MezonAppEvent.Pong, () => {
        window.Mezon.WebView?.onEvent<IMezonAppUserInfo>(
          MezonAppEvent.CurrentUserInfo,
          userInfoEventHandler
        );
        window.Mezon.WebView?.postEvent(MezonWebViewEvent.SendBotID, {
          appId: import.meta.env.VITE_MEZON_APP_ID,
        });
      });
    }
  }, [token, navigate]);

  return () => {
    window.Mezon.WebView?.offEvent(
      MezonAppEvent.CurrentUserInfo,
      userInfoEventHandler
    );
  };
};

export { useInitGame };
