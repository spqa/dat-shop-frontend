import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductIndexComponent} from './product-index/product-index.component';
import {RouterModule, Routes} from "@angular/router";
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductCateComponent} from './product-cate/product-cate.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductIndexComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'category/:id',
    component: ProductCateComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailComponent, ProductIndexComponent, ProductCardComponent, ProductCateComponent],
  exports: [
    RouterModule
  ]
})
export class ProductModule {
}
