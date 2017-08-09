import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app',
  template: require('./categoryTree.component.html')
})
export class CategoryTree {
    categoryTree: any[] = [];
    reversedCategoryTree: any = [];

    constructor (private _mainService: MainService) { }

    ngOnInit() {
        // get Tree
        this._mainService.getTreeData()
          .subscribe(
                res => {
                    // store tree data
                    this.categoryTree = res ? res : [];
                    this.reversedCategoryTree = this.traverseObject(this.categoryTree);
                },
                err => {
                    console.log(err);
                }
          );
    }

    // traverse object (not working)
    traverseObject(element: any[]) {
        let newElement = [];

        // loop through the element
        element.forEach(function(item: any, index: number) {
            newElement.unshift(item);

            // if item has children
            if(item.children.length >= 1) {
                // call same function again
                // this.traverseObject(item.children);
                console.log(item);
            }
        });
    }
}
