import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

export interface TaskProps {
  id?: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root',
})
export class QueriesService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getData(): Observable<TaskProps[]> {
    return this.http.get<TaskProps[]>(`${this.baseUrl}/posts`);
  }

  getSingleData(task: any): Observable<TaskProps> {
    const url = `${this.baseUrl}/posts/${task.id}`;
    return this.http.get<any>(url);
  }

  postData(task: TaskProps): Observable<TaskProps> {
    return this.http.post<TaskProps>(
      `${this.baseUrl}/posts`,
      task,
      httpOptions
    );
  }

  updateData(task: TaskProps): Observable<TaskProps> {
    const url = `${this.baseUrl}/posts/${task.id}`;
    return this.http.patch<TaskProps>(url, task, httpOptions);
  }

  deleteData(task: TaskProps): Observable<TaskProps> {
    const url = `${this.baseUrl}/posts/${task.id}`;
    return this.http.delete<TaskProps>(url);
  }
}
