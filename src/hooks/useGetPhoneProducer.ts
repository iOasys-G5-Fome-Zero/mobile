import { useState, useEffect } from 'react';
import { handleError } from '../helpers';
import { api } from '../services/api';

const useGetPhoneProducer = (producerId: string) => {
  const [Phoneproducer, setPhoneProducer] = useState('');

  const getProducer = async () => {
    try {
      const { data } = await api.post(`/producers/${producerId}`);

      setPhoneProducer(data.userID.phone);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (producerId) {
      getProducer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [producerId]);

  return Phoneproducer;
};

export default useGetPhoneProducer;
