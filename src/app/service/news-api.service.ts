import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = environment.MY_API_KEY; // Store the API key from the environment file
  apiUrl = environment.API_URL; // Store the API URL from the environment file

  constructor(private http: HttpClient) {
   }

   /**
   * Fetches articles from the news API.
   * @returns An Observable of type any that emits the response from the API.
   */

  getArticles(): Observable<any> {
    const url = `${this.apiUrl}//everything?q=tesla&from=2023-09-14&sortBy=publishedAt&apiKey=${this.apiKey}`
    return this.http.get<any>(url); // Send a GET request to the specified URL and return the Observable
  }
}
