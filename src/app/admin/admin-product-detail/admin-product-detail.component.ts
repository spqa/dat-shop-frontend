import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {UploadService} from "../../shared/services/upload.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {CategoryService} from "../../shared/services/category.service";
import {Observable} from "rxjs/Observable";
import {Category} from "../../shared/models/category";
import {ProductService} from "../../shared/services/product.service";
import {ResultMessage} from "../../shared/models/result-message";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import {ParcelService} from "../../shared/services/parcel.service";
import {Parcel} from "../../shared/models/parcel";

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.scss']
})
export class AdminProductDetailComponent implements OnInit {

  product: Product = new Product();
  cateStream: Observable<Category[]>;
  adding = false;
  resultMessage: ResultMessage;
  parcelStream: Observable<Parcel[]>;
  constructor(private uploadService: UploadService,
              private cateService: CategoryService,
              private productService: ProductService,
              private parcelService: ParcelService,
              private router: Router,
              private route: ActivatedRoute) {
    this.cateStream = this.cateService.getCategoryStream();
    this.cateService.reload();
    this.route.data.subscribe((data) => this.adding = data.adding);
    this.route.paramMap.filter(() => !this.adding).switchMap((params) => this.productService.getProduct(params.get("id")))
      .subscribe((product) => {
        this.product = product;
        console.log(product);
      });
    this.parcelStream = this.parcelService.get();
  }

  ngOnInit() {
  }

  uploadFile(file: File) {
    this.uploadService.upload(file).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
        // This is an upload progress event. Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        console.log(`File is ${percentDone}% uploaded.`);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.product.Image = event.body.image;
      }
    });
  }

  submitProduct() {
    console.log(this.adding);
    if (this.adding) {
      this.productService.addProduct(this.product)
        .subscribe((result) => this.resultMessage = result);
    } else {
      this.productService.update(this.product)
        .subscribe((result) => this.resultMessage = result);
    }
  }

}
