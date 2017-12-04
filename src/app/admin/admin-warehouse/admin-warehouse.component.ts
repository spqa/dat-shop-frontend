import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {WarehouseList} from "../../shared/models/warehouse";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-admin-warehouse',
  templateUrl: './admin-warehouse.component.html',
  styleUrls: ['./admin-warehouse.component.scss']
})
export class AdminWarehouseComponent implements OnInit {

  warehouses: WarehouseList;

  constructor(private productService: ProductService) {
    this.productService.getWarehouse().subscribe((warehouses) => this.warehouses = warehouses);
  }

  ngOnInit() {
  }

}
