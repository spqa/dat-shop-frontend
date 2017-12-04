import {OrderDetail} from "./order-detail";

export class Order {
  OrderOutID: string;
  CusID: string;
  DateOut: string;
  Status: string;
  OrderDetail: OrderDetail[];
}

export interface OrderList {
  current_page: number;
  data: Order[];
  from: number;
  to: number;
  total: number;
  last_page;
}
