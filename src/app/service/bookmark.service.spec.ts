import { TestBed } from '@angular/core/testing';

import { BookmarkService } from './bookmark.service';

describe('BookmarkService', () => {
  let service: BookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve bookmarks', () => {
    const mockBookmarks = [{ /* sample bookmark object */
    title: "Toyota Inks Deal to Mass Produce Solid State EV Batteries With 932-Mile Range",
    description: "Toyota has struck a deal with fellow Japanese company Idemitsu Kosan to mass produce ultra-high-range EVs with solid-state batteries. It's the first major update on the company's plans to be the first to offer these next-gen batteries. Toyota says the new tec…",
    url: "https://biztoc.com/x/7127d9f661894163",
    urlToImage: "https://c.biztoc.com/p/7127d9f661894163/og.webp",
   }];
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockBookmarks));

    const bookmarks = service.getBookmarks();

    expect(bookmarks).toEqual(mockBookmarks);
    expect(localStorage.getItem).toHaveBeenCalledWith(service.getStorageKey());
  });

  it('should add a bookmark', () => {
    const mockBookmark = { /* sample bookmark object */
    title: "Toyota Inks Deal to Mass Produce Solid State EV Batteries With 932-Mile Range",
    description: "Toyota has struck a deal with fellow Japanese company Idemitsu Kosan to mass produce ultra-high-range EVs with solid-state batteries. It's the first major update on the company's plans to be the first to offer these next-gen batteries. Toyota says the new tec…",
    url: "https://biztoc.com/x/7127d9f661894163",
    urlToImage: "https://c.biztoc.com/p/7127d9f661894163/og.webp",
  };
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([]));
    spyOn(localStorage, 'setItem');

    service.addBookmark(mockBookmark);

    expect(localStorage.getItem).toHaveBeenCalledWith(service.getStorageKey());
    expect(localStorage.setItem).toHaveBeenCalledWith(service.getStorageKey(), JSON.stringify([mockBookmark]));
  });

  it('should remove a bookmark', () => {
    const mockBookmarks = [{ /* sample bookmark object */
    title: "Toyota Inks Deal to Mass Produce Solid State EV Batteries With 932-Mile Range",
    description: "Toyota has struck a deal with fellow Japanese company Idemitsu Kosan to mass produce ultra-high-range EVs with solid-state batteries. It's the first major update on the company's plans to be the first to offer these next-gen batteries. Toyota says the new tec…",
    url: "https://biztoc.com/x/7127d9f661894163",
    urlToImage: "https://c.biztoc.com/p/7127d9f661894163/og.webp",
  }, {
     /* another sample bookmark object */
     title: "Toyota Inks Deal to Mass Produce Solid State EV Batteries With 932-Mile Range",
     description: "Toyota has struck a deal with fellow Japanese company Idemitsu Kosan to mass produce ultra-high-range EVs with solid-state batteries. It's the first major update on the company's plans to be the first to offer these next-gen batteries. Toyota says the new tec…",
     url: "https://biztoc.com/x/7127d9f661894163",
     urlToImage: "https://c.biztoc.com/p/7127d9f661894163/og.webp",
    }];
    const mockBookmarkToRemove = { /* bookmark object to remove */
    title: "Toyota Inks Deal to Mass Produce Solid State EV Batteries With 932-Mile Range",
    description: "Toyota has struck a deal with fellow Japanese company Idemitsu Kosan to mass produce ultra-high-range EVs with solid-state batteries. It's the first major update on the company's plans to be the first to offer these next-gen batteries. Toyota says the new tec…",
    url: "https://biztoc.com/x/7127d9f661894163",
    urlToImage: "https://c.biztoc.com/p/7127d9f661894163/og.webp",
  };
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockBookmarks));
    spyOn(localStorage, 'setItem');

    service.removeBookmark(mockBookmarkToRemove);

    expect(localStorage.getItem).toHaveBeenCalledWith(service.getStorageKey());
    expect(localStorage.setItem).toHaveBeenCalledWith(service.getStorageKey(), JSON.stringify(mockBookmarks.filter(b => b.title !== mockBookmarkToRemove.title)));
  });

  it('should check if an article is bookmarked', () => {
    const mockBookmarks = [{ /* sample bookmark object */
    title: "Tesla verkauft jetzt Autofolien um 8.000 Dollar",
    description: "Mit den Folierungen können Tesla-Besitzer*innen ihre Autos individualisieren und vor Kratzern schützen.",
    url: "https://futurezone.at/produkte/tesla-autofolien-folierung-8000-dollar-model-3-model-y-farben/402631892",
    urlToImage: "https://image.futurezone.at/images/facebook/8233082/tesla.jpg",
  }, { /* another sample bookmark object */
  title: "Tesla verkauft jetzt Autofolien um 8.000 Dollar",
  description: "Mit den Folierungen können Tesla-Besitzer*innen ihre Autos individualisieren und vor Kratzern schützen.",
  url: "https://futurezone.at/produkte/tesla-autofolien-folierung-8000-dollar-model-3-model-y-farben/402631892",
  urlToImage: "https://image.futurezone.at/images/facebook/8233082/tesla.jpg",
}];
    const mockArticle = { /* article object to check */
    title: "Toyota Inks Deal to Mass Produce Solid State EV Batteries With 932-Mile Range",
    description: "Toyota has struck a deal with fellow Japanese company Idemitsu Kosan to mass produce ultra-high-range EVs with solid-state batteries. It's the first major update on the company's plans to be the first to offer these next-gen batteries. Toyota says the new tec…",
    url: "https://biztoc.com/x/7127d9f661894163",
    urlToImage: "https://c.biztoc.com/p/7127d9f661894163/og.webp",
  };
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockBookmarks));

    const isBookmarked = service.isBookmarked(mockArticle);

    expect(localStorage.getItem).toHaveBeenCalledWith(service.getStorageKey());
    expect(isBookmarked).toBe(false); // Provide the expected value based on the input.
  });

  afterEach(() => {
    localStorage.removeItem(service.getStorageKey());
  });

});
