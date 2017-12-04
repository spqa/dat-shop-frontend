import {Product} from "./product";

export class OrderDetail {
  ProID: string;
  ParID: string;
  OrdOutID: string;
  Quantity: number;
  PriceOut: number;
  Discount: number;
  Total: number;
  product: Product;
}
