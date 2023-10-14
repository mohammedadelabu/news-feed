import { Component, OnInit, HostListener } from '@angular/core';
import { Article } from '../models/article.model';
import { BookmarkService } from '../service/bookmark.service';
import { Router } from '@angular/router';
import { TITLE, ARTICLE_ROUTE } from '../constants/bookmarked';

@Component({
  selector: 'app-bookmarked-articles',
  templateUrl: './bookmarked-articles.component.html',
  styleUrls: ['./bookmarked-articles.component.scss'],
})
export class BookmarkedArticlesComponent implements OnInit {
  bookmarks: Article[] = [];
  title = TITLE;
  showBackToTopButton = false; // Declare the showBackToTopButton property

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
    private bookmarkService: BookmarkService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks() {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

  removeBookmark(bookmark: any) {
    this.bookmarkService.removeBookmark(bookmark);
    this.getBookmarks();
  }

  goBack() {
    this.router.navigate([ARTICLE_ROUTE]);
  }
}
