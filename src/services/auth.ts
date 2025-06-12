import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import type { IMezonAppUserHashInfo, IMezonAppUserInfo } from "../types/common";
import { isUserExists, loginMezon } from "./user";
import { MezonAppEvent, MezonWebViewEvent } from "../mezon-web-sdk/webview/types.d";
import { TOKENS } from "../consts/common";

const logout = () => {
  localStorage.removeItem(TOKENS.ACCESS_TOKEN);
  localStorage.removeItem(TOKENS.REFRESH_TOKEN);
  window.location.href = "/login";
}

const initAuth = () => {
  const { token, login } = useAuth();
  const navigate = useNavigate();

  const userHashInforEventHandler = async (_type: string, isUserExisted: boolean, data?: IMezonAppUserHashInfo, appData?: IMezonAppUserInfo) => {
    if (data) {
      const webAppData = data.message.web_app_data;
      if (isUserExisted) {
        const { data: jwt } = await loginMezon({ web_app_data: webAppData });
        if (jwt) {
          login(jwt);
          navigate("/welcome");
        }
      }
      else {
        // call API to create new user with webAppData and login
        const queryParams = new URLSearchParams();
        queryParams.append("webAppData", webAppData);
        queryParams.append("email", appData?.email || "");
        queryParams.append("avatarUrl", appData?.user.avatar_url || "");
        queryParams.append("identityId", appData?.user.id || "");
        navigate(`/welcome?isNew=true&${queryParams.toString()}`);
      }
    }
  }

  const userInfoEventHandler = async (_type: string, appData?: IMezonAppUserInfo) => {
    if (!appData) {
      navigate("/login");
      return;
    }
    try {
      const userId = appData.user?.id;
      if (!userId) throw new Error("No userId");

      const isUserExisted: boolean = await isUserExists(userId) || false;
      window.Mezon.WebView?.onEvent<IMezonAppUserHashInfo>(
        MezonAppEvent.UserHashInfo, (type: string, data?: IMezonAppUserHashInfo) => {
          console.log('appDataappData', appData);
          userHashInforEventHandler(type, isUserExisted, data, appData);
        }
      )
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/welcome");
      return;
    }

    if (window.Mezon?.WebView) {
      window.Mezon.WebView.postEvent(MezonWebViewEvent.Ping, { message: "Hello Mezon!" });

      window.Mezon.WebView.onEvent(MezonAppEvent.Pong, () => {
        window.Mezon.WebView?.onEvent<IMezonAppUserInfo>(
          MezonAppEvent.CurrentUserInfo,
          userInfoEventHandler
        );
        window.Mezon.WebView?.postEvent(MezonWebViewEvent.SendBotID, {
          appId: import.meta.env.VITE_MEZON_APP_ID
        });

      });
    }
  }, [token, navigate]);

  return () => {
    window.Mezon.WebView?.offEvent(MezonAppEvent.CurrentUserInfo, userInfoEventHandler);
  }
}

export {
  initAuth,
  logout
}