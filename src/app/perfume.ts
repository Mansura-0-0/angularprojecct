export interface Review {
  rating: number;
  comment: string;
}

export interface Perfume {
  _id?: string;
  name: string;
  brand: string;
  description: string;
  scentType: string;
  rating: number;
  price: number;
  image: string;
  gender: string;
  reviews?: Review[];
}