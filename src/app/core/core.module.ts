import {Page404Component} from './page-404/page-404.component';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NavigationBarComponent, Page404Component],
  exports: [
    NavigationBarComponent,
    Page404Component,
    RouterModule
  ]
})
export class CoreModule {
}
