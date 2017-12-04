import {Product} from "./product";
import {Parcel} from "./parcel";

export class OrderDetail {
  ProID: string;
  ParID: number;
  OrdOutID: string;
  Quantity: number;
  PriceOut: number;
  Discount: number;
  Total: number;
  product: Product;
  parcel: Parcel;
}
