import React, { useEffect } from 'react';
import type { IMezonAppUserHashInfo, IMezonAppUserInfo } from '../../types/users';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { MezonAppEvent, MezonWebViewEvent } from '../../mezon-web-sdk/webview/types.d';
const MyApp: React.FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (window.Mezon.WebView) {
      window.Mezon.WebView.postEvent(MezonWebViewEvent.Ping, {
        message: "Hello Mezon!"
      })

      window.Mezon.WebView.onEvent(MezonAppEvent.Pong, () => {
        console.log("Hello Mezon Again!")
        window.Mezon.WebView?.onEvent<IMezonAppUserInfo>(
          MezonAppEvent.CurrentUserInfo,
          () => {
            return
          }
        )

        window.Mezon.WebView?.postEvent(MezonWebViewEvent.SendBotID, {
          appId: import.meta.env.VITE_MEZON_APP_ID
        })
        window.Mezon.WebView?.onEvent<IMezonAppUserHashInfo>(
          MezonAppEvent.UserHashInfo,
          async (data) => {
            if (data) {
              try {
                // await pLoginMezon({ web_app_data: data.message.web_app_data })
                navigate("/welcome")
                toast.success("Login successful on Mezon!")
              } catch (error) {
                toast.error("Login failed on Mezon!")
              }
            } else {
              toast.error("Login failed on Mezon!")
            }
          }
        )
      })
    }
  }, [])

  return (
    <div className='text-black bg-white p-4'>
      <h1>Welcome to my app</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

export default MyApp;