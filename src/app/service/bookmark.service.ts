import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { BOOKMARKS } from '../constants/bookmarked';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  private readonly STORAGE_KEY = BOOKMARKS;

  getBookmarks(): Article[] {
    const bookmarksData = localStorage.getItem(this.STORAGE_KEY);
    return bookmarksData ? JSON.parse(bookmarksData) : [];
  }

  addBookmark(article: Article): void {
    const bookmarks = this.getBookmarks();
    bookmarks.push(article);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookmarks));
  }

  removeBookmark(bookmark: Article): void {
    let bookmarks = this.getBookmarks();
    bookmarks = bookmarks.filter(b => b.title !== bookmark.title);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookmarks));
  }

  isBookmarked(article: Article): boolean {
    const bookmarks = this.getBookmarks();
    return bookmarks.some(b => b.title === article.title);
  }
}
