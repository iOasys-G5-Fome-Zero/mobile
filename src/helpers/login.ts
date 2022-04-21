import handleError from './handleError';
import { api } from '../services/api';

const login = async ({ phoneOrEmail, password }) => {
  try {
    const { data: dataUser } = await api.post(
      '/auth/login',
      {
        phoneOrEmail,
        password
      },
      { timeout: 10000 }
    );

    return dataUser;
  } catch (error) {
    handleError(error);
  }
};

export default login;
