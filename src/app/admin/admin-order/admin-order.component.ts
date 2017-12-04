import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../shared/services/order.service";
import {OrderList} from "../../shared/models/Order";
import {ResultMessage} from "../../shared/models/result-message";

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {

  orders: OrderList;
  resultMessage: ResultMessage;

  constructor(private orderService: OrderService) {
    this.orderService.getOrderStream().subscribe((orders) => {
      this.orders = orders;
    });
  }

  ngOnInit() {
    this.orderService.reload();
  }

  receiveOrder(id: number) {
    this.orderService.receive(id).subscribe((result) => {
      this.resultMessage = result;
      this.orderService.reload();
    });
  }

  userReturn(id: number) {
    this.orderService.userReturn(id).subscribe((result) => {
      this.resultMessage = result;
      this.orderService.reload();
    });
  }

}
