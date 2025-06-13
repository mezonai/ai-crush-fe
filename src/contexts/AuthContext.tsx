import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import { jwtDecode } from 'jwt-decode';
import { TOKENS } from '../consts/common';
import type { LoginMezonResponse } from '../types/response';
import { logout as handleLogout } from '@services/auth';

type UserDecodedInfo =
  | {
      id: string;
      email: string;
      userName: string;
    }
  | undefined;

type AuthContextType = {
  token: string | null;
  user: UserDecodedInfo;
  login: (tokens: { accessToken: string; refreshToken: string }) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  token: '',
  user: undefined,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

const ACCESS_TOKEN_KEY = TOKENS.ACCESS_TOKEN;

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState(() =>
    localStorage.getItem(TOKENS.ACCESS_TOKEN)
  );
  const [refreshToken, setRefreshToken] = useState(() =>
    localStorage.getItem(TOKENS.REFRESH_TOKEN)
  );
  const [user, setUser] = useState<UserDecodedInfo>(() => {
    const savedToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    return savedToken ? jwtDecode(savedToken) : undefined;
  });

  // Optional: refresh user info if token changes
  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
    } else {
      setUser(undefined);
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
  }, [token]);

  useEffect(() => {
    if (refreshToken) {
      localStorage.setItem(TOKENS.REFRESH_TOKEN, refreshToken);
    } else {
      localStorage.removeItem(TOKENS.REFRESH_TOKEN);
    }
  }, [refreshToken]);

  const login = ({ accessToken, refreshToken }: LoginMezonResponse) => {
    setToken(accessToken);
    setRefreshToken(refreshToken);
  };

  const logout = () => {
    setToken(null);
    setRefreshToken(null);
    handleLogout();
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
