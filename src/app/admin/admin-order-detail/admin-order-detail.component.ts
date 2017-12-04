import {Component, OnInit} from '@angular/core';
import {OrderDetail} from "../../shared/models/order-detail";
import {OrderService} from "../../shared/services/order.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.scss']
})
export class AdminOrderDetailComponent implements OnInit {

  orders: OrderDetail[];
  totalPrice: number;
  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {
    this.route.paramMap
      .switchMap((params) => this.orderService.getOrderDetail(params.get("id")))
      .subscribe((orders) => {
        this.orders = orders;
        this.totalPrice = this.orders.reduce((sum, order) => {
          sum += order.product.PriceOut * order.Quantity;
          return sum;
        }, 0);
      });
  }

  ngOnInit() {
  }

}
