import axios, { type AxiosResponse } from 'axios';
import { logout } from '../services/auth';
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

axiosHttp.interceptors.response.use(
  (response) => {
    if (response?.data && typeof response.data === 'object' && 'data' in response.data) {
      return response.data;
    }
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
        const { data } = await axios.post(
          '/auth/refresh-token',
          {},
          { withCredentials: true }
        );
        const newToken = data.accessToken;

        localStorage.setItem('accessToken', newToken);
        axiosHttp.defaults.headers['Authorization'] = 'Bearer ' + newToken;
        processQueue(null, newToken);

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
  }
);

export default axiosHttp;
