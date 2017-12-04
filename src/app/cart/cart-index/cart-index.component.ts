import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {OrderDetail} from "../../shared/models/order-detail";
import {OrderService} from "../../shared/services/order.service";
import {ResultMessage} from "../../shared/models/result-message";

@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.scss']
})
export class CartIndexComponent implements OnInit {

  carts: OrderDetail[];
  resultMessage: ResultMessage;

  constructor(private cartService: CartService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.cartService.getCartStream().subscribe((carts) => {
      this.carts = carts;
    });
  }

  reserve() {
    this.orderService.reserve(this.carts).subscribe((result) => {
      this.resultMessage = result;
    });
  }
}
