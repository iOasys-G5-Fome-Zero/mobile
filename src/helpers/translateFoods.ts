const translateFood = (food: string) => {
  switch (food) {
    case 'spices':
      return 'Temperos';
    case 'leaves':
      return 'Verduras';
    case 'vegetables':
      return 'Legumes';
    case 'fruits':
      return 'Frutas';
    case 'processed':
      return 'Processados';
    default:
      return food;
  }
};

export default translateFood;
