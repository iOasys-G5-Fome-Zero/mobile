export interface IBasketItems {
  spices: number;
  vegetables: number;
  leaves: number;
  fruits: number;
  processed: number;
}

export interface IFood {
  createdAt?: string;
  deletedAt?: string | null;
  id?: string;
  name: string;
  priceWeight?: number;
  updatedAt?: string;
}

export interface IFoodBasketResponse {
  id?: string;
  quantity: number;
  foodID: IFood;
}

export interface IFoodInMyBasket {
  foodID: string;
  quantity: number;
}
