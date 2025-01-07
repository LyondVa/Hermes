import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(private http: HttpClient) { }

  get<T>(url: string) {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(url, body);
  }

}
