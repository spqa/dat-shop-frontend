import {Category} from "./category";

export class Product {
  ProID: string;
  ProName: string;
  PriceOut: number;
  Image: string;
  CatID: number;
  Discount: string;
  category: Category;
}

export interface ProductList {
  current_page: number;
  data: Product[];
  from: number;
  to: number;
  total: number;
  last_page;
}
