import axios from 'axios';
import * as keychain from 'react-native-keychain';

export const baseURL = 'https://ioasys-g5-fome-zero-api-dev.herokuapp.com/';

export const api = axios.create({ withCredentials: true, baseURL });

const { interceptors } = api;

export async function refreshAccessToken() {
  const credentials = await keychain.getGenericPassword({
    service: 'refreshToken'
  });

  if (credentials) {
    const { data } = await api.put('/auth/refresh');

    await keychain.setGenericPassword('accessToken', data.token, {
      service: 'accessToken'
    });

    await keychain.setGenericPassword('refreshToken', data.refresh_token, {
      service: 'refreshToken'
    });

    return data?.token;
  }
}

interceptors.request.use(
  async config => {
    await keychain.getGenericPassword({
      service: 'accessToken'
    });

    return config;
  },

  error => Promise.reject(error)
);

interceptors.response.use(
  response => response,
  async error => {
    if (
      error.response.status === 401 &&
      error.config.url !== '/auth/refresh' &&
      !error.config.retry
    ) {
      await refreshAccessToken();

      return api(error.config);
    }

    return Promise.reject(error);
  }
);
