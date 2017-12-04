import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartIndexComponent} from './cart-index/cart-index.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'cart',
    component: CartIndexComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [CartIndexComponent],
  exports: [RouterModule]
})
export class CartModule {
}
