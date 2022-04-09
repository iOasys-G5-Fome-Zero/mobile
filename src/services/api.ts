import axios from 'axios';

export const baseURL = 'https://ioasys-g5-fome-zero-api-dev.herokuapp.com/';

export const api = axios.create({ withCredentials: true, baseURL });

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url !== '/auth/refresh' &&
      !originalRequest.retry
    ) {
      originalRequest.retry = true;
      await api.put('/auth/refresh');
      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);
