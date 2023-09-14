import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getCookie, setCookie } from 'cookies-next';

const axiosInterceptorInstance = axios.create({
  baseURL: '/api',
});

axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.statusText === 'TKN-0001') {
      return tokenRefresh(error.config as AxiosRequestConfig);
    }

    return Promise.reject(error);
  },
);

/** 리프레시 토큰으로 재발급 후 이전 API 재호출 */
const tokenRefresh = async (original: AxiosRequestConfig) => {
  const originalRequest = original;
  const refresh = getCookie('refreshToken');
  const res: AxiosResponse = await axiosInterceptorInstance.post(
    '/auth/refresh',
    {
      refresh: refresh,
    },
  );
  setCookie('accessToken', res.data.accessToken);

  if (!originalRequest.headers) return;
  originalRequest.headers['Authorization'] = 'Bearer' + res.data.accessToken;

  return axiosInterceptorInstance(originalRequest);
};

export default axiosInterceptorInstance;
