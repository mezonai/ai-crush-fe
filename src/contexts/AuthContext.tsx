import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from 'react';
import { jwtDecode } from 'jwt-decode';
import { TOKENS } from '../consts/common';

type UserDecodedInfo =
  | {
    id: string;
    email: string;
    userName: string;
  }
  | undefined;

type AuthContextType = {
  token: string | null;
  user: UserDecodedInfo; // Replace 'any' with your user type
  login: (jwt: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  token: '',
  user: undefined,
  login: () => { },
  logout: () => { },
  isAuthenticated: false,
});

const ACCESS_TOKEN_KEY = TOKENS.ACCESS_TOKEN;

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(ACCESS_TOKEN_KEY));
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

  const login = (jwt: string) => {
    setToken(jwt);
  };

  const logout = () => {
    setToken(null);
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

// Hook to use auth
export const useAuth = () => useContext(AuthContext);
