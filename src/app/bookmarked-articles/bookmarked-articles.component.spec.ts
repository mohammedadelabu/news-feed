import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkedArticlesComponent } from './bookmarked-articles.component';

import { Router } from '@angular/router';
import { BookmarkService } from '../service/bookmark.service';
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

  it('should navigate to ARTICLE_ROUTE when goBack is called', () => {
    component.goBack();

    expect(router.navigate).toHaveBeenCalledWith([ARTICLE_ROUTE]);
  });
});
