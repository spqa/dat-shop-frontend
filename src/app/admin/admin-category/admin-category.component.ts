import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../shared/services/category.service";
import {Observable} from "rxjs/Observable";
import {Category} from "../../shared/models/category";
import {ResultMessage} from "../../shared/models/result-message";

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

  categoryStream: Observable<Category[]>;
  newCategory: Category = new Category();
  addingCate = false;
  resultMessage: ResultMessage;

  constructor(private cateService: CategoryService) {
    this.categoryStream = this.cateService.getCategoryStream();
  }

  ngOnInit() {
    this.cateService.reload();
  }

  async addCate() {
    this.reset();
    this.resultMessage = await this.cateService.addCate(this.newCategory).toPromise();
    if (this.resultMessage.error === false) {
      console.log("Flag#1");
      this.cateService.reload();
    }
  }

  edit(id: number) {

  }

  async destroy(id: string) {
    const cate = new Category();
    cate.CatID = id;
    this.resultMessage = await this.cateService.destroy(cate).toPromise();
    if (this.resultMessage.error === false) {
      this.cateService.reload();
    }
  }

  toggle() {
    this.reset();
    this.addingCate = !this.addingCate;
  }

  reset() {
    this.resultMessage = null;
  }
}
