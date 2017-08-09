import { Component, Input } from '@angular/core';

@Component ({
  selector: 'tree',
  template: `
  <ul>
    <li *ngFor="let item of data">
      {{item.title}}
      <tree [data]="item.children"></tree>
    </li>
  </ul>
  `
})
export class Tree {
    @Input() data = [];
}
