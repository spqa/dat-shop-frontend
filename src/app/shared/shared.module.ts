import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationErrorComponent} from './notification-error/notification-error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationErrorComponent],
  exports: [NotificationErrorComponent]
})
export class SharedModule {
}
