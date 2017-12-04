import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SignInComponent
  ],
  exports: [RouterModule]
})
export class LoginModule {
}
