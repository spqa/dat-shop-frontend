import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Product, ProductList} from "../models/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ResultMessage} from "../models/result-message";
import {WarehouseList} from "../models/warehouse";

@Injectable()
export class ProductService {

  private EP = environment.API_ENDPOINT;
  productStream: BehaviorSubject<ProductList> = new BehaviorSubject(null);
  currentPage: number;

  constructor(private http: HttpClient) {
  }

  getProductStream(): Observable<ProductList> {
    return this.productStream.asObservable();
  }

  reload(page?: number) {
    this.http.get<ProductList>(this.EP + "/product" + `${page ? '?page=' + page : ''}`)
      .subscribe((result) => {
        this.currentPage = result.current_page;
        this.productStream.next(result);
      });
  }

  addProduct(product: Product): Observable<ResultMessage> {
    return this.http.post<ResultMessage>(this.EP + "/product", product);
  }

  destroy(product: Product): Observable<ResultMessage> {
    return this.http.delete<ResultMessage>(this.EP + "/product" + "/" + product.ProID);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.EP + "/product/" + id);
  }

  update(product: Product): Observable<ResultMessage> {
    return this.http.put<ResultMessage>(this.EP + "/product/" + product.ProID, product);
  }

  getWarehouse(): Observable<WarehouseList> {
    return this.http.get<WarehouseList>(this.EP + "/warehouse");
  }

}
