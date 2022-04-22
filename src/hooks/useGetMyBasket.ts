import { useState, useEffect } from 'react';
import { api } from '../services/api';

const useGetMyBasket = () => {
  const [myBasket, setMyBasket] = useState(null);

  const getMyBasket = async () => {
    try {
      const { data } = await api.get(`/consumers/get-consumer-basket`);

      setMyBasket(data);
    } catch (error) {
      // handleError(error);
    }
  };

  useEffect(() => {
    getMyBasket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return myBasket;
};

export default useGetMyBasket;
