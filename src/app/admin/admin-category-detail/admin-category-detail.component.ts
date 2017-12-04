import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../shared/services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Category} from "../../shared/models/category";
import {HttpErrorResponse} from "@angular/common/http";
import {ResultMessage} from "../../shared/models/result-message";

@Component({
  selector: 'app-admin-category-detail',
  templateUrl: './admin-category-detail.component.html',
  styleUrls: ['./admin-category-detail.component.scss']
})
export class AdminCategoryDetailComponent implements OnInit {

  category: Category;
  resultMessage: ResultMessage;

  constructor(private cateService: CategoryService,
              private route: Router,
              private routeParam: ActivatedRoute) {
    this.routeParam.paramMap
      .switchMap((params) => this.cateService.getCate(params.get("id")))
      .subscribe(
        (cate) => {
          this.category = cate;
        },
        (err) => this.handleError(err));
  }

  ngOnInit() {

  }

  onSubmit() {
    this.cateService.update(this.category)
      .subscribe((result) => {
        this.resultMessage = result;
      });
  }

  handleError(err: HttpErrorResponse) {
    if (err.status === 404) {
      this.route.navigate(["**"]);
    }
  }

}
