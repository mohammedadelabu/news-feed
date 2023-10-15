import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkedArticlesComponent } from './bookmarked-articles.component';

import { Router } from '@angular/router';
import { BookmarkService } from '../service/bookmark.service';
import { Article } from '../models/article.model';
import { ARTICLE_ROUTE } from '../constants/bookmarked';
describe('BookmarkedArticlesComponent', () => {
  let component: BookmarkedArticlesComponent;
  let fixture: ComponentFixture<BookmarkedArticlesComponent>;
  let bookmarkService: BookmarkService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedArticlesComponent ],
      providers: [
        { provide: BookmarkService, useValue: jasmine.createSpyObj('BookmarkService', ['getBookmarks', 'removeBookmark']) },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkedArticlesComponent);
    component = fixture.componentInstance;

    bookmarkService = TestBed.inject(BookmarkService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call getBookmarks method on initialization', () => {
  //   const getBookmarksSpy = spyOn(bookmarkService, 'getBookmarks').and.returnValue([]);

  //   component.ngOnInit();

  //   expect(getBookmarksSpy).toHaveBeenCalled();
  //   expect(component.bookmarks).toEqual([]);
  // });

  // it('should call removeBookmark and getBookmarks methods when removeBookmark is called', () => {
  //   const bookmark: Article = {
  //      title: "Toyota Inks Deal to Mass Produce Solid State EV Batteries With 932-Mile Range",
  //   description: "Toyota has struck a deal with fellow Japanese company Idemitsu Kosan to mass produce ultra-high-range EVs with solid-state batteries. It's the first major update on the company's plans to be the first to offer these next-gen batteries. Toyota says the new tec…",
  //   url: "https://biztoc.com/x/7127d9f661894163",
  //   urlToImage: "https://c.biztoc.com/p/7127d9f661894163/og.webp",
  // };
  //   const removeBookmarkSpy = spyOn(bookmarkService, 'removeBookmark');
  //   const getBookmarksSpy = spyOn(bookmarkService, 'getBookmarks').and.returnValue([]);

  //   component.removeBookmark(bookmark);

  //   expect(removeBookmarkSpy).toHaveBeenCalledWith(bookmark);
  //   expect(getBookmarksSpy).toHaveBeenCalled();
  //   expect(component.bookmarks).toEqual([]);
  // });

  it('should navigate to ARTICLE_ROUTE when goBack is called', () => {
    component.goBack();

    expect(router.navigate).toHaveBeenCalledWith([ARTICLE_ROUTE]);
  });
});
