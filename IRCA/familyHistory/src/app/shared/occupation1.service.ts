import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Occupation1 } from './occupation1.model';

@Injectable({
  providedIn: 'root'
})
export class Occupation1Service {

  selectedOcc1: Occupation1=new Occupation1();
  Occ:Occupation1[]=[];
  readonly baseURL ='http://localhost:3000/occupations';



  constructor(private http: HttpClient) { }

  postOcc(ad: Occupation1): Observable<any> {
    return this.http.post(this.baseURL, ad)
      .pipe(
        catchError(error => {
          console.error('Error in postAdol:', error);
          return throwError(error);
        })
      );
  }

  getOcc1():Observable<any>{
    return this.http.get(this.baseURL);
  }
}
