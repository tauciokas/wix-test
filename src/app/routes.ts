import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryTree} from './components/main/categoryTree.component';

@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: CategoryTree
  }
];

export const routing = RouterModule.forRoot(routes);
