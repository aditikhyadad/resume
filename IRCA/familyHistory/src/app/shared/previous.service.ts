import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Previous } from './previous.model';

@Injectable({
  providedIn: 'root'
})
export class PreviousService {
  selectedPrevious: Previous = new Previous(); // Use parentheses to create a new instance
  previous: Previous[] = [];
  readonly baseURL = 'http://localhost:3000/previous';

  constructor(private http: HttpClient) { }

  postPrevious(sib: Previous): Observable<any> {
    
    return this.http.post(this.baseURL, sib);

  }

  getPreviousList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putPrevious(sib: Previous): Observable<any> {
    return this.http.put(this.baseURL + `/${sib._id}`, sib);
  }

  deletePrevious(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}



// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import { Previous } from './previous.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class PreviousService {
//   selectedPrevious: Previous = new Previous(); // Use parentheses to create a new instance
//   previous: Previous[] = [];
//   readonly baseURL = 'http://localhost:3000/previous';

//   constructor(private http: HttpClient) { }

//   postPrevious(prev: Previous): Observable<any> {
//     return this.http.post(this.baseURL, prev)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   getPreviousList(): Observable<any> {
//     return this.http.get(this.baseURL)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   // putPrevious(prev: Previous): Observable<any> {
//   //   return this.http.put(`${this.baseURL}/${prev._id}`, prev)
//   //     .pipe(
//   //       catchError(this.handleError)
//   //     );
//   // }

//   // deletePrevious(_id: string): Observable<any> {
//   //   return this.http.delete(`${this.baseURL}/${_id}`)
//   //     .pipe(
//   //       catchError(this.handleError)
//   //     );
//   // }

//   private handleError(error: HttpErrorResponse) {
//     console.error('API Error:', error);
//     let errorMessage = 'An error occurred while processing the request.';

//     if (error.error instanceof ErrorEvent) {
//       // Client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Server-side error
//       errorMessage = `Status: ${error.status}, Message: ${error.message}`;
//     }

//     // Log the error on a logging service if available
//     // LogService.logError(error);

//     // Throw a new observable with the error message
//     return throwError(errorMessage);
//   }
// }
