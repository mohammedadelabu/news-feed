import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BookmarkedArticlesComponent } from './bookmarked-articles.component';



@NgModule({
  declarations: [
    BookmarkedArticlesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class BookmarkedArticlesModule { }
