// import { Component, OnInit, HostListener } from '@angular/core';
// import { Article } from '../models/article.model';
// import { BookmarkService } from '../service/bookmark.service';
// import { Router } from '@angular/router';
// import { TITLE, ARTICLE_ROUTE } from '../constants/bookmarked';
// import { ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-bookmarked-articles',
//   templateUrl: './bookmarked-articles.component.html',
//   styleUrls: ['./bookmarked-articles.component.scss'],
// })
// export class BookmarkedArticlesComponent implements OnInit {
//   bookmarks: Article[] = [];
//   title = TITLE;
//   showBackToTopButton = false; // Declare the showBackToTopButton property

//   @HostListener('window:scroll', [])
//   onWindowScroll(): void {
//     this.showBackToTopButton =
//       (window.pageYOffset ||
//         document.documentElement.scrollTop ||
//         document.body.scrollTop) > 500;
//   }

//   // Method to scroll back to the top
//   scrollToTop(): void {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }

//   constructor(
//     private bookmarkService: BookmarkService,
//     private router: Router,
//     private toastr: ToastrService
//   ) {}

//   ngOnInit() {
//     this.getBookmarks();
//   }

//   getBookmarks() {
//     this.bookmarks = this.bookmarkService.getBookmarks();
//   }

//   removeBookmark(bookmark: any) {
//     this.bookmarkService.removeBookmark(bookmark);
//     this.getBookmarks();
//     this.toastr.warning('A bookmarked article is removed!', 'Warning');

//   }

//   goBack() {
//     this.router.navigate([ARTICLE_ROUTE]);
//   }
// }

import { Component, OnInit, HostListener } from '@angular/core';
import { Article } from '../models/article.model';
import { BookmarkService } from '../service/bookmark.service';
import { Router } from '@angular/router';
import { TITLE, ARTICLE_ROUTE } from '../constants/bookmarked';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookmarked-articles',
  templateUrl: './bookmarked-articles.component.html',
  styleUrls: ['./bookmarked-articles.component.scss'],
})
export class BookmarkedArticlesComponent implements OnInit {
  bookmarks: Article[] = []; // Array to store bookmarked articles
  title = TITLE; // Title for the component
  showBackToTopButton = false; // Property to control back-to-top button visibility

  // Host listener for the window scroll event to show/hide the back-to-top button
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
    private bookmarkService: BookmarkService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Initialize the component by fetching bookmarked articles
    this.getBookmarks();
  }

  // Method to retrieve bookmarked articles
  getBookmarks() {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

  // Method to remove a bookmarked article
  removeBookmark(bookmark: any) {
    this.bookmarkService.removeBookmark(bookmark);
    this.getBookmarks();
    this.toastr.warning('A bookmarked article is removed!', 'Warning');
  }

  // Method to navigate back to the article list view
  goBack() {
    this.router.navigate([ARTICLE_ROUTE]);
  }
}
