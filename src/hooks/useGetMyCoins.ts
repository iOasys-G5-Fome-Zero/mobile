import { useState, useEffect } from 'react';
import { handleError } from '../helpers';
import { api } from '../services/api';

const useGetMyCoins = () => {
  const [coins, setCoins] = useState('');

  const getMyCoins = async () => {
    try {
      const { data } = await api.get(`/consumers/get-cryptos/`);

      setCoins(data);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getMyCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return coins;
};

export default useGetMyCoins;
