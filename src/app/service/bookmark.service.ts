import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { BOOKMARKS } from '../constants/bookmarked';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  // private readonly STORAGE_KEY = BOOKMARKS;
  private static readonly STORAGE_KEY = BOOKMARKS;

  public getStorageKey(): string {
    return BookmarkService.STORAGE_KEY;
  }

  getBookmarks(): Article[] {
    const bookmarksData = localStorage.getItem(BookmarkService.STORAGE_KEY);
    return bookmarksData ? JSON.parse(bookmarksData) : [];

    // const bookmarksData = localStorage.getItem(this.STORAGE_KEY);
    // return bookmarksData ? JSON.parse(bookmarksData) : [];
  }

  addBookmark(article: Article): void {
    const bookmarks = this.getBookmarks();
    bookmarks.push(article);
    localStorage.setItem(BookmarkService.STORAGE_KEY, JSON.stringify(bookmarks));
  }

  removeBookmark(bookmark: Article): void {
    let bookmarks = this.getBookmarks();
    bookmarks = bookmarks.filter(b => b.title !== bookmark.title);
    localStorage.setItem(BookmarkService.STORAGE_KEY, JSON.stringify(bookmarks));
  }

  isBookmarked(article: Article): boolean {
    const bookmarks = this.getBookmarks();
    return bookmarks.some(b => b.title === article.title);
  }
}
