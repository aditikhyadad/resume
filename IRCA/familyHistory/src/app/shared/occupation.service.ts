import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Occupation } from './occupation.model';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {

  selectedOcc: Occupation=new Occupation();
  Occ:Occupation[]=[];
  readonly baseURL ='http://localhost:3000/occs';



  constructor(private http: HttpClient) { }

  postOcc(ad: Occupation): Observable<any> {
    return this.http.post(this.baseURL, ad)
      .pipe(
        catchError(error => {
          console.error('Error in postAdol:', error);
          return throwError(error);
        })
      );
  }

  getOcc():Observable<any>{
    return this.http.get(this.baseURL);
  }
}
