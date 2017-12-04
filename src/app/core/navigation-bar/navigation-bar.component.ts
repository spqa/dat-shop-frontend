import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import * as _ from 'lodash';
import {NavigationEnd, Router} from "@angular/router";
import {CategoryService} from "../../shared/services/category.service";
import {Observable} from "rxjs/Observable";
import {Category} from "../../shared/models/category";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  total = 0;
  isAdmin = false;
  cateStream: Category[];
  constructor(private cartService: CartService,
              private router: Router,
              private cateService: CategoryService) {
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
    this.cateService.getCategoryStream().subscribe((e) => this.cateStream = e);
    // this.cateService.getCategoryStream().subscribe((e)=>console.log(e));
    this.cateService.reload();
  }

}
