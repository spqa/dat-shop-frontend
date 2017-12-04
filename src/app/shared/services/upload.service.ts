import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UploadService {

  constructor(private http: HttpClient) {
  }

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append("image", file);
    const req = new HttpRequest('POST', environment.API_ENDPOINT + "/upload", formData, {
      reportProgress: true,
    });
    return this.http.request<string>(req);
  }

}
