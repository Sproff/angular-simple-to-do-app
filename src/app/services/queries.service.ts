import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueriesService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/1`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, data);
  }

  updateData(data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/posts/1`, data);
  }

  deleteData(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/posts/1`);
  }
}
