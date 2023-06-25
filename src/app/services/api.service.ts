import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getJSON(url: string) {
    return this.http.get(`${url}.json`);
  }

  getMD(url: string) {
    return this.http.get(`${url}.md`, { responseType: 'text' });
  }
}
