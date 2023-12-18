export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      Rating;
  stock: number;
  quantity?: number;
  totalPrice?: number;
}



export interface Rating {
  rate:  number;
  count: number;
}


export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "mens clothing",
  WomenSClothing = "womens clothing",
}

export type ProductSign = {
  [key: string]: any
 }
