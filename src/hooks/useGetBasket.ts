import { useState, useEffect } from 'react';
import { handleError } from '../helpers';
import { api } from '../services/api';

const useGetFoodsBasket = (basketID: string) => {
  const [foods, setFoods] = useState([]);

  const getFoodBasket = async () => {
    try {
      const { data } = await api.get(`/baskets/basket/${basketID}`);

      setFoods(data);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getFoodBasket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketID]);

  return foods;
};

export default useGetFoodsBasket;
