import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getJSON(url: string) {
    return this.http.get(`${environment.appUrl}${url}.json`);
  }

  getMD(url: string) {
    return this.http.get(`${environment.appUrl}${url}.md`, { responseType: 'text' });
  }
}
