import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import type { IMezonAppUserHashInfo, IMezonAppUserInfo } from "../types/common";
import { isUserExists } from "./user";
import { MezonAppEvent, MezonWebViewEvent } from "../mezon-web-sdk/webview/types.d";

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/auth/basic-authentication";
}

const initAuth = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleUserInfo = async (_type: string, data?: IMezonAppUserInfo) => {
      if (!data) {
        navigate("/login");
        return;
      }
      try {
        const userId = data.user?.id;
        if (!userId) throw new Error("No userId");

        const existed: boolean = await isUserExists(userId);
        if (existed) {
          window.Mezon.WebView?.onEvent<IMezonAppUserHashInfo>(
            MezonAppEvent.UserHashInfo,
            async (_type, data) => {
              if (data) {
                // TODO: create logic login with user hash
                console.log("User hash info received:", data.message.web_app_data);
              }

              return;
            }
          )
          navigate("/welcome");
        } else {
          // call API to create new user and return tokens
          navigate("/welcome");
        }
      } catch (error) {
        navigate("/login");
      }
    };

    if (token) {
      navigate("/welcome");
      return;
    }

    if (window.Mezon?.WebView) {
      window.Mezon.WebView.postEvent(MezonWebViewEvent.Ping, { message: "Hello Mezon!" });

      window.Mezon.WebView.onEvent(MezonAppEvent.Pong, () => {
        window.Mezon.WebView?.onEvent<IMezonAppUserInfo>(
          MezonAppEvent.CurrentUserInfo,
          handleUserInfo
        );
        window.Mezon.WebView?.postEvent(MezonWebViewEvent.SendBotID, {
          appId: import.meta.env.VITE_MEZON_APP_ID
        });

      });
    }
  }, [token, navigate]);
}

export {
  initAuth,
  logout
}