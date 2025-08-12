export type UserType = {
  id: string;
  email: string;
  password: string;
};

export type ProductType = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
};

export type RatingType = {
  id: string;
  userId: string;
  productId: string;
  rating: number;
};

export type OrderType = {
  id: string;
  userId: string;
  date: Date;
  total: number;
  status: string;
};

export type OrderItemType = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
};