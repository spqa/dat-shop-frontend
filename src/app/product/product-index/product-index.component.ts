import {Component, OnInit} from '@angular/core';
import {ProductList} from "../../shared/models/product";
import {Observable} from "rxjs/Observable";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit {

  products: Observable<ProductList>;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProductStream();
    this.productService.reload();
  }

  ngOnInit() {
  }

}
