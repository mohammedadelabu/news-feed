import { Injectable } from '@angular/core';
import { IArticle } from '../models/article.model';
import { BOOKMARKS } from '../constants/bookmarked';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {

  constructor(
    private storageService: StorageService
  ) {}
  private static readonly STORAGE_KEY = BOOKMARKS;

  // Returns the storage key used for bookmarks
  public getStorageKey(): string {
    return BookmarkService.STORAGE_KEY;
  }

  // Retrieves the list of bookmarks from localStorage
  getBookmarks(): IArticle[] {
    const bookmarksData = this.storageService.getItem(BookmarkService.STORAGE_KEY);
    return bookmarksData ? JSON.parse(bookmarksData) : [];
  }

  // Adds a bookmark to the list and updates localStorage
  addBookmark(article: IArticle): void {
    const bookmarks = this.getBookmarks();
    bookmarks.push(article);
    this.storageService.setItem(
      BookmarkService.STORAGE_KEY,
      JSON.stringify(bookmarks)
    );
  }

  // Removes a bookmark from the list and updates localStorage
  removeBookmark(bookmark: IArticle): void {
    let bookmarks = this.getBookmarks();
    bookmarks = bookmarks.filter((b) => b.title !== bookmark.title);
    this.storageService.setItem(
      BookmarkService.STORAGE_KEY,
      JSON.stringify(bookmarks)
    );
  }

  // Checks if an article is bookmarked
  isBookmarked(article: IArticle): boolean {
    const bookmarks = this.getBookmarks();
    return bookmarks.some((b) => b.title === article.title);
  }
}
