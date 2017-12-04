import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductIndexComponent} from './product-index/product-index.component';
import {RouterModule, Routes} from "@angular/router";
import {ProductCardComponent} from './product-card/product-card.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductIndexComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailComponent, ProductIndexComponent, ProductCardComponent],
  exports: [
    RouterModule
  ]
})
export class ProductModule {
}
