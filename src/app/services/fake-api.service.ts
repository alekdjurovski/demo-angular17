import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://fakestoreapi.com/products/category/electronics'

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(BASE_URL)
  }

}
