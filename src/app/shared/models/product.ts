import {Category} from "./category";
import {Warehouse} from "./warehouse";

export class Product {
  ProID: string;
  ProName: string;
  PriceOut: number;
  PriceIn: number;
  Image: string;
  CatID: number;
  Discount: string;
  category: Category;
  warehouses: Warehouse;
}

export interface ProductList {
  current_page: number;
  data: Product[];
  from: number;
  to: number;
  total: number;
  last_page;
}
