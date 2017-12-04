import {Injectable} from '@angular/core';
import {OrderDetail} from "../models/order-detail";
import * as _ from 'lodash';
import {ProductService} from "./product.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Product} from "../models/product";

@Injectable()
export class CartService {

  private orderDetail: BehaviorSubject<OrderDetail[]> = new BehaviorSubject([]);

  constructor(private productService: ProductService) {
    this.load();
  }

  add(product: Product) {
    const orders = this.orderDetail.getValue();
    const index = _.findIndex(orders, {ProID: product.ProID});
    if (index === -1) {
      const order = new OrderDetail();
      order.ProID = product.ProID;
      order.Quantity = 1;
      order.product = product;
      orders.push(order);
    } else {
      orders[index].Quantity++;
    }
    this.orderDetail.next(orders);
    this.save();
  }

  remove(product: Product) {
    const orders = this.orderDetail.getValue();
    const index = _.findIndex(orders, {ProID: product.ProID});
    if (index !== -1) {
      orders[index].Quantity--;
      if (orders[index].Quantity === 0) {
        orders.splice(index, 1);
      }
    }
    this.orderDetail.next(orders);
    this.save();
  }

  getCartStream(): Observable<OrderDetail[]> {
    return this.orderDetail.asObservable();
  }

  save() {
    localStorage.setItem("cart", JSON.stringify(this.orderDetail.getValue()));
  }

  load() {
    const orders: OrderDetail[] = JSON.parse(localStorage.getItem("cart"));
    if (orders) {
      this.orderDetail.next(orders);
    } else {
      this.orderDetail.next([]);
    }
  }

}
