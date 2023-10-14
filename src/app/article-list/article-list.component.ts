import { Component, OnInit, HostListener } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { BookmarkService } from '../service/bookmark.service';
import {
  TITLE,
  BUTTON_TEXT,
  ALREADY_BOOKMARKED,
  BOOKMARK_ROUTE,
} from '../constants/articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = []; // Newly added array
  bookmarks: Article[] = []; // Newly added array
  title = TITLE;
  buttonText = BUTTON_TEXT;
  showBackToTopButton = false; // Declare the showBackToTopButton property
  isLoading = false; // Add the isLoading flag

  // Add a host listener for window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showBackToTopButton =
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > 500;
  }

  // Method to scroll back to the top
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(
    private newsApiService: NewsApiService,
    private bookmarkService: BookmarkService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getArticles();
    this.getBookmarks();
  }

  getArticles() {
    this.isLoading = true; // Set isLoading to true when starting the request
    this.newsApiService.getArticles().subscribe({
      next: (data: any) => {
        this.articles = data?.articles.slice(0, 24);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        this.isLoading = false; // Set isLoading to false when the request is completed (regardless of success or failure)
      },
    });
  }

  getBookmarks() {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

  bookmarkArticle(article: any) {
    if (this.bookmarks.includes(article)) {
      // Article is already bookmarked, update the button text to 'Already bookmarked'
      article.buttonText = ALREADY_BOOKMARKED;
    } else {
      // Article is not yet bookmarked, add it to bookmarks and update the button text
      this.bookmarkService.addBookmark(article);
      article.buttonText = ALREADY_BOOKMARKED;
      this.getBookmarks();
    }
  }

  viewBookmarks() {
    this.router.navigate([BOOKMARK_ROUTE]);
  }
}
