import {Component, Input, OnInit} from '@angular/core';
import {ResultMessage} from "../models/result-message";

@Component({
  selector: 'app-notification-error',
  templateUrl: './notification-error.component.html',
  styleUrls: ['./notification-error.component.scss']
})
export class NotificationErrorComponent implements OnInit {

  @Input() result: ResultMessage;

  constructor() {
  }

  ngOnInit() {
  }

}
