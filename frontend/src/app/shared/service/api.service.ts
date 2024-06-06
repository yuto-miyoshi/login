import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  /**
   * @param url should start with slash(/)
   * @param data json format
   * @returns response data
   */
  execute<T, S>(url: string, data: S): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}${url}`, data);
  }
}
