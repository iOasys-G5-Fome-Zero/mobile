import { useState } from 'react';

const useGetMyCoins = () => {
  const [coins, setCoins] = useState('');
  return coins;
};

export default useGetMyCoins;
