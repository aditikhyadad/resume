// are.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Are } from './are.model';

@Injectable({
  providedIn: 'root'
})
export class AreService {
  selectedAre: Are = new Are();
  ares: Are[] = [];
  readonly baseURL = 'http://localhost:3000/are';

  constructor(private http: HttpClient) { }

  postAre(are: Are): Observable<any> {
    // const url = `${this.baseURL}/${are.id}`;
    return this.http.post(this.baseURL, are)
      .pipe(
        catchError(error => {
          console.error('Error in postAre:', error);
          return throwError(error);
        })
      );
  }

  getAres(areId?: string): Observable<Are[]> {
    const url = areId ? `${this.baseURL}/${areId}` : this.baseURL;
    return this.http.get<Are[]>(url);
  }
}

