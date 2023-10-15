import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { BookmarkedArticlesComponent } from './bookmarked-articles/bookmarked-articles.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  { path: 'bookmarked', component: BookmarkedArticlesComponent },
  { path: '**', redirectTo: '/articles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
