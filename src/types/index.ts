export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};