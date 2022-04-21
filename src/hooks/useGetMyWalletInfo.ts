import { useState, useEffect } from 'react';
import { handleError } from '../helpers';
import { api } from '../services/api';

const useGetMyWalletInfo = () => {
  const [myWallet, setMyWallet] = useState(null);

  const getMyWalletInfo = async () => {
    try {
      const { data } = await api.get(`/producers/pix/my-pix-keys`);

      setMyWallet(data);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getMyWalletInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return myWallet;
};

export default useGetMyWalletInfo;
