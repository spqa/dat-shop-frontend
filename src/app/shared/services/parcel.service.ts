import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Parcel} from "../models/parcel";
import {environment} from "../../../environments/environment";

@Injectable()
export class ParcelService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Parcel[]> {
    return this.http.get<Parcel[]>(environment.API_ENDPOINT + "/parcel");
  }
}
