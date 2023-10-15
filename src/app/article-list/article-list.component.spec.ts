import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ArticleListComponent } from './article-list.component';
import { NewsApiService } from '../service/news-api.service';
import { BookmarkService } from '../service/bookmark.service';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;
  let newsApiService: NewsApiService;
  let bookmarkService: BookmarkService;
  const mockArticles: Article[] = [
    {
      title: "Top 10 Kitchen Appliances To Perk Up & Improve Your Cooking Process",
      description: "Top 10 Kitchen Appliances To Perk Up & Improve Your Cooking ProcessIf you’re a passionate lover of cooking, or you’ve recently kickstarted your cooking journey, and want to accelerate it even further then you’ve reached the...",
      url: "https://www.yankodesign.com/2023/10/14/top-10-kitchen-appliances-to-perk-up-improve-your-cooking-process/",
      urlToImage: "https://www.yankodesign.com/images/design_news/2023/10/top-10-kitchen-appliances-to-spruce-up-your-cooking-process/top_10_kitchen_appliances_top_chef_yanko_design_hero.jpg"
    }
  ];

  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ ArticleListComponent ],
      imports: [ RouterTestingModule,HttpClientModule ],
      providers: [ NewsApiService, BookmarkService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;

    newsApiService = TestBed.inject(NewsApiService);
    bookmarkService = TestBed.inject(BookmarkService);

    spyOn(newsApiService, 'getArticles').and.returnValue(of(mockArticles.slice(0, 24)));
    spyOn(bookmarkService, 'getBookmarks').and.returnValue([]);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display bookmarks after calling getBookmarks', () => {
    component.getBookmarks();
    fixture.detectChanges();
    expect(component.bookmarks).toEqual([]);
  });

  it('should bookmark an article and update button text if not already bookmarked', () => {
    const article: Article = {
      title: "Toyota Inks Deal to Mass Produce Solid State EV Batteries With 932-Mile Range",
      description: "Toyota has struck a deal with fellow Japanese company Idemitsu Kosan...",
      url: "https://biztoc.com/x/7127d9f661894163",
      urlToImage: "https://c.biztoc.com/p/7127d9f661894163/og.webp"
    };
    spyOn(bookmarkService, 'addBookmark');
    spyOn(component, 'getBookmarks').and.callFake(() => {});

    component.bookmarkArticle(article);

    expect(bookmarkService.addBookmark).toHaveBeenCalledWith(article);
    expect(article.buttonText).toBe('Already bookmarked');
    expect(component.getBookmarks).toHaveBeenCalled();
  });

  it('should update button text to "Already bookmarked" if article is already bookmarked', () => {
    const article: Article = {
      title: "Toyota Inks Deal to Mass Produce Solid State EV Batteries With 932-Mile Range",
      description: "Toyota has struck a deal with fellow Japanese company Idemitsu Kosan...",
      url: "https://biztoc.com/x/7127d9f661894163",
      urlToImage: "https://c.biztoc.com/p/7127d9f661894163/og.webp"
    };
    spyOn(component, 'getBookmarks').and.callFake(() => {
      component.bookmarks = [article];
    });

    component.bookmarkArticle(article);

    expect(article.buttonText).toBe('Already bookmarked');
    expect(component.getBookmarks).toHaveBeenCalled();
  });

  it('should navigate to bookmark route when viewBookmarks is called', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.viewBookmarks();

    expect(navigateSpy).toHaveBeenCalledWith(['/bookmarked']);
  });
});
