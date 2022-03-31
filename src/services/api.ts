import axios from 'axios';
import * as keychain from 'react-native-keychain';
// import { store } from '../store';
// import { setUser } from '../store/User/reducer';
// import { store } from '../redux';
// import { logout } from '../utils/logout';

export const baseURL = 'https://ioasys-g5-fome-zero-api-dev.herokuapp.com/';

export const api = axios.create({ baseURL });

api.interceptors.request.use(
  async config => {
    const accessToken = await keychain.getGenericPassword({
      service: 'accessToken'
    });

    if (accessToken) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      config.headers!.Authorization = `${accessToken.password}`;
    }

    return config;
  },

  error => Promise.reject(error)
);

export async function refreshAccessToken() {
  const credentials = await keychain.getGenericPassword({
    service: 'refreshToken'
  });

  if (credentials) {
    const { data } = await api.put('/auth/refresh', {
      refresh_token: credentials.password
    });

    await keychain.setGenericPassword('accessToken', data.token, {
      service: 'accessToken'
    });

    await keychain.setGenericPassword('refreshToken', data.refresh_token, {
      service: 'refreshToken'
    });
    // store.dispatch(setUser(data.user));
    return data?.token;
  }
}

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.message === 'Network Error') {
      return Promise.reject(new Error('Sem conexão com a internet'));
    }

    if (
      error.response.status === 401 &&
      originalRequest.url !== '/sessions/refresh-token' &&
      !originalRequest.retry
    ) {
      const accessToken = await refreshAccessToken();

      originalRequest.retry = true;
      originalRequest.headers.role_id = 2;
      originalRequest.headers.Authorization = `${accessToken}`;

      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);
