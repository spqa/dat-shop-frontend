import {Component, OnInit} from '@angular/core';
import {ProductList} from "../../shared/models/product";
import {Observable} from "rxjs/Observable";
import {ProductService} from "../../shared/services/product.service";
import {WarehouseList} from "../../shared/models/warehouse";
import * as _ from 'lodash';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit {

  warehouses: WarehouseList;

  constructor(private productService: ProductService) {
    this.productService.getWarehouse().subscribe((warehouses) => {
      this.warehouses = warehouses;
      this.warehouses.data = _.take(warehouses.data, 8);
    });
    // this.productService.reload();
  }

  ngOnInit() {
  }

}
