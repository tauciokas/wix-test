import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {routing, RootComponent} from './routes';

import { MainService } from './services/main.service';
import { CategoryTree } from './components/main/categoryTree.component';
import { Tree } from './components/tree.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  declarations: [
    RootComponent,
    CategoryTree,
    Tree
  ],
  providers: [MainService],
  bootstrap: [RootComponent]
})
export class AppModule {}
