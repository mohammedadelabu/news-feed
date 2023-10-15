import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ArticleListComponent } from './article-list.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    ArticleListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      closeButton: true,
      progressBar: false,
      enableHtml: true,
      preventDuplicates: true,
    }),
  ]
})
export class ArticleListModule { }
