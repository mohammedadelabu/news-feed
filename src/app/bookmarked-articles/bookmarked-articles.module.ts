import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BookmarkedArticlesComponent } from './bookmarked-articles.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    BookmarkedArticlesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      progressBar: false,
      enableHtml: true,
      preventDuplicates: true,
    }),
  ]
})
export class BookmarkedArticlesModule { }
