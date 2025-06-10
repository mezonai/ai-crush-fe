import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { MezonAppEvent, MezonWebViewEvent } from '../../mezon-web-sdk/webview/types.d';
import type { IMezonAppUserHashInfo, IMezonAppUserInfo } from '../../types/common';
import { isUserExists } from '../../services/user';

// This page is used to initialize the application, such as setting up global state or fetching initial data.
const InitPage: React.FC = () => {
  const { token } = useAuth();
  const navigate = useNavigate();


  const checkUserExist = async (_type: string, data?: IMezonAppUserInfo) => {
    if (data) {
      try {
        const userId = data.user?.id;
        // call API to login user on mezon mini app
        if (await isUserExists({ userId })) {
          // call API create user and redirect to introduction page

        }

        // call API login and redirect to login page
      } catch (error) {
        console.error("Login failed on Mezon!")
        navigate("/login")
      }
    } else {
      console.error("Login failed on Mezon!")
      navigate("/login")
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/welcome");
      return;
    }

    if (window.Mezon.WebView) {
      window.Mezon.WebView.postEvent(MezonWebViewEvent.Ping, {
        message: "Hello Mezon!"
      })

      window.Mezon.WebView.onEvent(MezonAppEvent.Pong, () => {
        window.Mezon.WebView?.onEvent<IMezonAppUserInfo>(
          MezonAppEvent.CurrentUserInfo,
          async (_type, data) => { await checkUserExist(_type, data) }
        )

        window.Mezon.WebView?.postEvent(MezonWebViewEvent.SendBotID, {
          appId: import.meta.env.VITE_MEZON_APP_ID
        })

        window.Mezon.WebView?.onEvent<IMezonAppUserHashInfo>(
          MezonAppEvent.UserHashInfo,
          async (_type, _data) => {
            return;
          }
        )
      })
    }
  }, [])

  return (
    <></>
  );
}

export default InitPage;