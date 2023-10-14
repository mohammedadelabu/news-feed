import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ArticleListComponent } from './article-list.component';



@NgModule({
  declarations: [
    ArticleListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ]
})
export class ArticleListModule { }
