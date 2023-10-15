import { Component, OnInit, HostListener } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';
import { IArticle } from '../models/article.model';
import { Router } from '@angular/router';
import { BookmarkService } from '../service/bookmark.service';
import { ToastrService } from 'ngx-toastr';

import {
  TITLE,
  BUTTON_TEXT,
  ALREADY_BOOKMARKED,
  BOOKMARK_ROUTE,
} from '../constants/articles';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: IArticle[] = []; // Array to store fetched articles
  bookmarks: IArticle[] = []; // Array to store bookmarked articles
  title = TITLE; // Title for the article list component
  buttonText = BUTTON_TEXT; // Text for the bookmark button
  showBackToTopButton = false; // Flag to control the visibility of the back to top button
  isLoading = false; // Flag to indicate whether articles are being loaded or not
  getArticleSub!: Subscription; // Subscription to get articles

  // Host listener for window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showBackToTopButton =
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > 500;
  }

  // Method to scroll back to the top of the page
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(
    private newsApiService: NewsApiService,
    private bookmarkService: BookmarkService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getArticles(); // Fetch articles when component initializes
    this.getBookmarks(); // Get the bookmarked articles when component initializes
  }

    // Method to fetch articles from the news API
  getArticles() {
    this.isLoading = true; // Set isLoading to true when starting the request
    this.getArticleSub = this.newsApiService.getArticles().subscribe({
      next: (data: any) => {
        this.articles = data?.articles.slice(0, 24); // Store fetched articles in the array
        this.toastr.success('News Articles are being fetched!', 'Please wait...'); // Display success message using Toastr

      },
      error: (error: any) => {
        console.error(error);
        this.toastr.error('News Articles are not fetched!', 'Error!'); // Display error message using Toastr
      },
      complete: () => {
        this.isLoading = false; // Set isLoading to false when the request is completed (regardless of success or failure)
      },
    });
  }

    // Method to get the bookmarked articles from the bookmark service
  getBookmarks() {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

    // Method to bookmark an article
  bookmarkArticle(article: any) {
    if (this.bookmarks.includes(article)) {
      // Article is already bookmarked, update the button text to 'Already bookmarked'
      article.buttonText = ALREADY_BOOKMARKED;
      this.toastr.success('An article is bookmarked!', 'Success!'); // Display success message using Toastr
    } else {
      // Article is not yet bookmarked, add it to bookmarks and update the button text
      this.bookmarkService.addBookmark(article);
      this.toastr.success('An article is bookmarked!', 'Success!');
      article.buttonText = ALREADY_BOOKMARKED;
      this.getBookmarks(); // Refresh the list of bookmarked articles
    }
  }

    // Method to navigate to the bookmark page
  viewBookmarks() {
    this.router.navigate([BOOKMARK_ROUTE]);
  }

  ngOnDestroy() {
    // Unsubscribe from the get articles subscription when the component is destroyed
    this.getArticleSub?.unsubscribe();
  }
}
