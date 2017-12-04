import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Category} from "../models/category";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {ResultMessage} from "../models/result-message";

@Injectable()
export class CategoryService {

  private EP = environment.API_ENDPOINT;
  categoryStream: BehaviorSubject<Category[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  getCategoryStream(): Observable<Category[]> {
    return this.categoryStream.asObservable();
  }

  reload() {
    this.http.get<Category[]>(this.EP + "/category")
      .subscribe((result) => this.categoryStream.next(result));
  }

  addCate(cate: Category): Observable<ResultMessage> {
    return this.http.post<ResultMessage>(this.EP + "/category", cate);
  }

  destroy(cate: Category): Observable<ResultMessage> {
    return this.http.delete<ResultMessage>(this.EP + "/category" + "/" + cate.CatID);
  }

  getCate(id: string): Observable<Category> {
    return this.http.get<Category>(this.EP + "/category/" + id);
  }

  update(cate: Category): Observable<ResultMessage> {
    return this.http.put<ResultMessage>(this.EP + "/category/" + cate.CatID, cate);
  }
}
