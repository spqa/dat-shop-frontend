import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import * as _ from 'lodash';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  total = 0;
  isAdmin = false;

  constructor(private cartService: CartService,
              private router: Router) {
    this.cartService.getCartStream().subscribe((orders) => {
      this.total = _.sumBy(orders, "Quantity");
    });
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        this.isAdmin = events.url.startsWith("/admin");
      }
    });
  }

  ngOnInit() {
  }

}
