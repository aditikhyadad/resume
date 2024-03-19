import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs';

import { Experience } from './experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  selectedexp: Experience=new Experience();
  adols: Experience[]=[];
  readonly baseURL ='http://localhost:3000/experiences';
  constructor(private http: HttpClient) { }

  postexp(ad: Experience): Observable<any> {
    return this.http.post(this.baseURL, ad)
      .pipe(
        catchError(error => {
          console.error('Error in postAdol:', error);
          return throwError(error);
        })
      );
  }

  getexp():Observable<any>{
    return this.http.get(this.baseURL);
  }
}
