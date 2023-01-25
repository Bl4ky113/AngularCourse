import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  baseQuery (): Observable<object> {
    return this.http.get<object>('https://swapi.dev/api/');
  }
}
