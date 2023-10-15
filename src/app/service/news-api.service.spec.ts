import { TestBed } from '@angular/core/testing';
import { NewsApiService } from './news-api.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
describe('NewsApiService', () => {
  let service: NewsApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NewsApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve articles', () => {
    const mockResponse = {
    "articles":[
      {
        "source": {
            "id": null,
            "name": "Jornada.com.mx"
        },
        "author": "Gustavo Leal F.",
        "title": "Gustavo Leal F.: Relocalización, Tesla, Corredor Interoceánico y seguridad social",
        "description": "El debate sobre la globalización neoliberal ha subrayado la desglobalización vinculada a la pospandemia, la interrupción de las cadenas de suministro, la concentración de la producción mundial en China, guerra fría tecnológica Estados Unidos-China (semiconduc…",
        "url": "https://www.jornada.com.mx/2023/10/14/politica/017a2pol",
        "urlToImage": "https://www.jornada.com.mx/imagemeta/1200x630BN.jpg",
        "publishedAt": "2023-10-14T08:52:55Z",
        "content": "l debate sobre la globalización neoliberal ha subrayado la desglobalización vinculada a la pospandemia, la interrupción de las cadenas de suministro, la concentración de la producción mundial en Chin… [+4106 chars]"
    },
    {
      "source": {
          "id": null,
          "name": "Jornada.com.mx"
      },
      "author": "Gustavo Leal F.",
      "title": "Gustavo Leal F.: Relocalización, Tesla, Corredor Interoceánico y seguridad social",
      "description": "El debate sobre la globalización neoliberal ha subrayado la desglobalización vinculada a la pospandemia, la interrupción de las cadenas de suministro, la concentración de la producción mundial en China, guerra fría tecnológica Estados Unidos-China (semiconduc…",
      "url": "https://www.jornada.com.mx/2023/10/14/opinion/017a2pol",
      "urlToImage": "https://www.jornada.com.mx/imagemeta/1200x630BN.jpg",
      "publishedAt": "2023-10-14T08:52:52Z",
      "content": "l debate sobre la globalización neoliberal ha subrayado la desglobalización vinculada a la pospandemia, la interrupción de las cadenas de suministro, la concentración de la producción mundial en Chin… [+4106 chars]"
  }
    ],
    "status": "ok",
    "totalResults": 2,

  };
    service.getArticles().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const url = `${environment.API_URL}//top-headlines?country=us&category=business&apiKey=${environment.MY_API_KEY}`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
