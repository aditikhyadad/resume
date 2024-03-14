import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs';

import { Adolescence } from './adolescence.model';


@Injectable({
  providedIn: 'root'
})
export class AdolescenceService {
  selectedadol: Adolescence=new Adolescence();
  adols: Adolescence[]=[];
  readonly baseURL ='http://localhost:3000/adols';

  constructor(private http: HttpClient) { }

  postAdol(ad: Adolescence): Observable<any> {
    return this.http.post(this.baseURL, ad)
      .pipe(
        catchError(error => {
          console.error('Error in postAdol:', error);
          return throwError(error);
        })
      );
  }

  getAdol():Observable<any>{
    return this.http.get(this.baseURL);
  }
}

  
