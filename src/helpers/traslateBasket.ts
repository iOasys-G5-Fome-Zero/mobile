export default class translateBasket {
  public static toPortuguese(basket: string): string {
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
  }

  public static toEnglish(basket: string): string {
    switch (basket) {
      case 'Grande' || 'grande':
        return 'big';
      case 'Média' || 'média':
        return 'medium';
      case 'Pequena' || 'pequena':
        return 'small';
      default:
        return basket;
    }
  }
}
