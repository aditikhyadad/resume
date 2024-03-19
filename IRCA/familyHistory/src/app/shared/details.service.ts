import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Details } from './details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  selectedDetails: Details = new Details(); // Use parentheses to create a new instance
  details: Details[] = [];
  readonly baseURL = 'http://localhost:3000/details';

  constructor(private http: HttpClient) { }

  postDetails(det: Details): Observable<any> {
    return this.http.post(this.baseURL, det);
  }

  getDetailsList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putDetails(det: Details): Observable<any> {
    return this.http.put(this.baseURL + `/${det._id}`, det);
  }

  deleteDetails(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
