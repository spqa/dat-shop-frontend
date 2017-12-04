import {OrderDetail} from "./order-detail";
import {Customer} from "./customer";

export class Order {
  OrdOutID: string;
  CusID: string;
  DateOut: string;
  Status: string;
  OrderDetail: OrderDetail[];
  customer: Customer;
}

export interface OrderList {
  current_page: number;
  data: Order[];
  from: number;
  to: number;
  total: number;
  last_page;
}
