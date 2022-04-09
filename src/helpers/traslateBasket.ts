const translateBasket = (basket: string) => {
  switch (basket) {
    case 'big':
      return 'grande';
    case 'medium':
      return 'médio';
    case 'small':
      return 'pequeno';
    default:
      return basket;
  }
};

export default translateBasket;
