import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderDetail} from "../models/order-detail";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {ResultMessage} from "../models/result-message";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {OrderList} from "../models/Order";

@Injectable()
export class OrderService {

  private EP = environment.API_ENDPOINT;
  private orderStream: BehaviorSubject<OrderList> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  reserve(orders: OrderDetail[]): Observable<ResultMessage> {
    return this.http.post<ResultMessage>(this.EP + "/order", orders);
  }

  reload() {
    this.http.get<OrderList>(this.EP + "/order").subscribe((orders) => {
      this.orderStream.next(orders);
    });
  }

  getOrderStream(): Observable<OrderList> {
    return this.orderStream.asObservable();
  }

  receive(id: number): Observable<ResultMessage> {
    return this.http.post<ResultMessage>(this.EP + "/order/receive/" + id, {});
  }

  userReturn(id: number): Observable<ResultMessage> {
    return this.http.post<ResultMessage>(this.EP + "/order/return/" + id, {});
  }

  getOrderDetail(id: string): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(this.EP + "/order/" + id + "/" + "order-detail");
  }
}
