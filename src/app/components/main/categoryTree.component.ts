import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app',
  template: require('./categoryTree.component.html')
})
export class CategoryTree {
    categoryTree: any[] = [];
    reversedCategoryTree: any[] = [];

    constructor (private _mainService: MainService) { }

    ngOnInit() {
        // get Tree
        this._mainService.getTreeData()
          .subscribe(
                res => {
                    // store tree data
                    this.categoryTree = res ? res : [];
                    this.reversedCategoryTree = res ? res.reverse() : [];
                },
                err => {
                    console.log(err);
                }
          );
    }
}
