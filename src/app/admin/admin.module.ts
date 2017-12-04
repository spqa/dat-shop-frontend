import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminIndexComponent} from './admin-index/admin-index.component';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {RouterModule, Routes} from "@angular/router";
import {AdminCategoryComponent} from './admin-category/admin-category.component';
import {FormsModule} from "@angular/forms";
import {AdminCategoryDetailComponent} from './admin-category-detail/admin-category-detail.component';
import {SharedModule} from "../shared/shared.module";
import {AdminProductComponent} from './admin-product/admin-product.component';
import {AdminProductDetailComponent} from './admin-product-detail/admin-product-detail.component';
import {AdminOrderComponent} from './admin-order/admin-order.component';
import {AdminCustomerComponent} from './admin-customer/admin-customer.component';
import {AdminAccountSettingComponent} from './admin-account-setting/admin-account-setting.component';
import {UploadService} from "../shared/services/upload.service";
import {AdminOrderDetailComponent} from './admin-order-detail/admin-order-detail.component';
import {AdminWarehouseComponent} from './admin-warehouse/admin-warehouse.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMenuComponent,
    children: [
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      {path: 'index', component: AdminIndexComponent},
      {path: 'category', component: AdminCategoryComponent},
      {path: 'category/:id', component: AdminCategoryDetailComponent},
      {path: 'product', component: AdminProductComponent},
      {path: 'product/add', component: AdminProductDetailComponent, data: {adding: true}},
      {path: 'product/:id', component: AdminProductDetailComponent},
      {path: 'order', component: AdminOrderComponent},
      {path: 'order/:id/order-detail', component: AdminOrderDetailComponent},
      {path: 'account', component: AdminAccountSettingComponent},
      {path: 'customer', component: AdminCustomerComponent},
      {path: 'warehouse', component: AdminWarehouseComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminIndexComponent,
    AdminMenuComponent,
    AdminCategoryComponent,
    AdminCategoryDetailComponent,
    AdminProductComponent,
    AdminProductDetailComponent,
    AdminOrderComponent,
    AdminCustomerComponent,
    AdminAccountSettingComponent,
    AdminOrderDetailComponent,
    AdminWarehouseComponent
  ],
  providers: [UploadService],
  exports: [RouterModule]
})
export class AdminModule {
}
