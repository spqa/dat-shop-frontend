import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {CartService} from "../../shared/services/cart.service";
import {OrderDetail} from "../../shared/models/order-detail";
import * as _ from 'lodash';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  orders: OrderDetail[];
  cartQuantity: number;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartService.getCartStream().subscribe((orders) => {
      this.orders = orders;
      const order = _.find(orders, {ProID: this.product.ProID});
      this.cartQuantity = order ? order.Quantity : 0;
    });
  }

  add() {
    const order = _.find(this.orders, {ProID: this.product.ProID});
    // if (order) {
    //   if (order.quantity < this.product.stock) {
    //     this.cartService.add(this.product);
    //   }
    // }else {
    this.cartService.add(this.product);
    // }
  }

  substract() {
    const order = _.find(this.orders, {ProID: this.product.ProID});
    if (order) {
      if (order.Quantity > 0) {
        this.cartService.remove(this.product);
      }
    } else {
      this.cartService.remove(this.product);
    }
  }

}
