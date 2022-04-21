import { useState, useEffect } from 'react';
import { handleError } from '../helpers';
import { api } from '../services/api';

const useGetPixProducer = () => {
  const [pixProducer, setPixProducer] = useState('');

  const getBasketProducerInfo = async () => {
    try {
      const { data } = await api.get(`/consumers/get-consumer-basket`);

      return data.basketProducerID;
    } catch (error) {
      handleError(error);
    }
  };

  const getPixProducer = async () => {
    const basketProducerInfo = await getBasketProducerInfo();

    if (basketProducerInfo) {
      if (basketProducerInfo.randomPix) {
        setPixProducer(basketProducerInfo.randomPix);
      } else if (basketProducerInfo.phonePix) {
        setPixProducer(basketProducerInfo.phonePix);
      } else if (basketProducerInfo.emailPix) {
        setPixProducer(basketProducerInfo.emailPix);
      } else if (basketProducerInfo.cpfPix) {
        setPixProducer(basketProducerInfo.cpfPix);
      }
    } else {
      setPixProducer('Não possui nenhuma chave pix cadastrada');
    }
  };

  useEffect(() => {
    getPixProducer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return pixProducer;
};

export default useGetPixProducer;
