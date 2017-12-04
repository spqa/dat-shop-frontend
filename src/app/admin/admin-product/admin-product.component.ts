import {Component, OnInit} from '@angular/core';
import {Product, ProductList} from "../../shared/models/product";
import {ProductService} from "../../shared/services/product.service";
import {ResultMessage} from "../../shared/models/result-message";

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  products: ProductList;
  resultMessage: ResultMessage;

  constructor(private productService: ProductService) {
    this.productService.getProductStream().subscribe((products) => this.products = products);
    this.productService.reload();
  }

  ngOnInit() {
  }

  nextPage() {
    if (this.products.current_page < this.products.last_page) {
      this.productService.reload(this.products.current_page + 1);
    }
  }

  prevPage() {
    if (this.products.current_page > 1) {
      this.productService.reload(this.products.current_page - 1);
    }
  }

  deleteProduct(id: string) {
    const product = new Product();
    product.ProID = id;
    this.productService.destroy(product).subscribe((result) => {
      this.resultMessage = result;
      this.productService.reload(this.products.current_page);
    });
  }
}
