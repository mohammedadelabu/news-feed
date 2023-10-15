import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BOOKMARKS } from '../constants/bookmarked';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = environment.MY_API_KEY;
  apiUrl = environment.API_URL;


  constructor(private http: HttpClient) {
   }

  getArticles(): Observable<any> {
    const url = `${this.apiUrl}//everything?q=tesla&from=2023-09-14&sortBy=publishedAt&apiKey=${this.apiKey}`
    return this.http.get<any>(url);
  }

  // getArticle(): Observable<any> {
  //   const articlesData = localStorage.getItem(this.STORAGE_KEY);
  //   return articlesData ? JSON.parse(articlesData) : [];
  // }

}
