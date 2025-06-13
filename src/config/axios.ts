import { logout } from '@/services/auth';
import axios from 'axios';
import { toast } from 'react-toastify';

let isRefreshing = false;
let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (error: unknown) => void;
}[] = [];

const axiosHttp = axios.create({
  baseURL: import.meta.env.VITE_MEZON_APP_BACKEND_URL,
});

const processQueue = (error: unknown, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axiosHttp.interceptors.request.use(
  (config) => {
    if ((config as any).skipAuth) {
      return config;
    }
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            return axiosHttp(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const config = {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        } as any;
        (config as any).skipAuth = true;
        const response = await axiosHttp.post('/auth/refresh-token', {}, config);
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data.data;
        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        axiosHttp.defaults.headers['Authorization'] = 'Bearer ' + newAccessToken;
        processQueue(null, newAccessToken);

        return axiosHttp(originalRequest);
      } catch (err) {
        processQueue(err, null);
        logout();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    } else if (error.response?.status === 500) {
      toast.error('Something went wrong. Please try again later.');
    } else if (error.response?.status === 403) {
      window.location.href = '/forbidden';
    } else if (error.response?.status === 404) {
      // window.location.href = '/404';
    }

    return Promise.reject(error);
  },
);

export default axiosHttp;
