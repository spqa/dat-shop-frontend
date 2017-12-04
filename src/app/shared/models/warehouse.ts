import {Parcel} from "./parcel";
import {Product} from "./product";

export class Warehouse {
  WareID: number;
  ProID: string;
  ParID: number;
  Quantity: number;
  parcel: Parcel;
  product: Product;
}

export interface WarehouseList {
  current_page: number;
  data: Warehouse[];
  from: number;
  to: number;
  total: number;
  last_page;
}
