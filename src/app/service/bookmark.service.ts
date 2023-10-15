import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { BOOKMARKS } from '../constants/bookmarked';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private static readonly STORAGE_KEY = BOOKMARKS;

  // Returns the storage key used for bookmarks
  public getStorageKey(): string {
    return BookmarkService.STORAGE_KEY;
  }

  // Retrieves the list of bookmarks from localStorage
  getBookmarks(): Article[] {
    const bookmarksData = localStorage.getItem(BookmarkService.STORAGE_KEY);
    return bookmarksData ? JSON.parse(bookmarksData) : [];
  }

  // Adds a bookmark to the list and updates localStorage
  addBookmark(article: Article): void {
    const bookmarks = this.getBookmarks();
    bookmarks.push(article);
    localStorage.setItem(
      BookmarkService.STORAGE_KEY,
      JSON.stringify(bookmarks)
    );
  }

  // Removes a bookmark from the list and updates localStorage
  removeBookmark(bookmark: Article): void {
    let bookmarks = this.getBookmarks();
    bookmarks = bookmarks.filter((b) => b.title !== bookmark.title);
    localStorage.setItem(
      BookmarkService.STORAGE_KEY,
      JSON.stringify(bookmarks)
    );
  }

  // Checks if an article is bookmarked
  isBookmarked(article: Article): boolean {
    const bookmarks = this.getBookmarks();
    return bookmarks.some((b) => b.title === article.title);
  }
}
