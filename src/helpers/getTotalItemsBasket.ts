const getTotalItemsBasket = (basket: string) => {
  switch (basket) {
    case 'big':
      return '16';
    case 'medium':
      return '12';
    case 'small':
      return '8';
    default:
      return '0';
  }
};

export default getTotalItemsBasket;
