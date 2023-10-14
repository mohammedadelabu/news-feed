import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedArticlesComponent } from './bookmarked-articles.component';

describe('BookmarkedArticlesComponent', () => {
  let component: BookmarkedArticlesComponent;
  let fixture: ComponentFixture<BookmarkedArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
