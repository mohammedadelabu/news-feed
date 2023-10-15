import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleListModule } from './article-list/article-list.module';
import { BookmarkedArticlesModule } from './bookmarked-articles/bookmarked-articles.module';
import { MaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ArticleListModule,
    BookmarkedArticlesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      progressBar: false,
      enableHtml: true,
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
