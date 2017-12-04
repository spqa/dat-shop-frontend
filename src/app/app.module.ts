import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {LoginModule} from "./login/login.module";
import {CategoryService} from "./shared/services/category.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./shared/services/product.service";
import {CartService} from "./shared/services/cart.service";
import {CartModule} from "./cart/cart.module";
import {OrderService} from "./shared/services/order.service";
import {ParcelService} from "./shared/services/parcel.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CartModule,
    AppRoutingModule,
    LoginModule,
    CoreModule,
  ],
  providers: [
    CategoryService,
    ProductService,
    CartService,
    OrderService,
    ParcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
