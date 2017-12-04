import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {OrderDetail} from "../../shared/models/order-detail";
import {OrderService} from "../../shared/services/order.service";
import {ResultMessage} from "../../shared/models/result-message";
import {Customer} from "../../shared/models/customer";
import {Order} from "../../shared/models/Order";

@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.scss']
})
export class CartIndexComponent implements OnInit {

  carts: OrderDetail[];
  resultMessage: ResultMessage;
  order: Order;
  totalPrice: number;
  constructor(private cartService: CartService,
              private orderService: OrderService) {
    this.order = new Order();
    this.order.customer = new Customer();
  }

  ngOnInit() {
    this.cartService.getCartStream().subscribe((carts) => {
      this.carts = carts;
      this.totalPrice = this.carts.reduce((sum, order) => {
        sum += order.product.PriceOut * order.Quantity;
        return sum;
      }, 0);
    });
  }

  onSubmit() {
    this.order.OrderDetail = this.carts;
    this.orderService.order(this.order).subscribe((result) => {
      this.resultMessage = result;
    });
  }

}
