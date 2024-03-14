import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Marital2 } from './marital2.model';

@Injectable({
  providedIn: 'root'
})
export class Marital2Service {
  selectedMarital2: Marital2 = new Marital2(); // Use parentheses to create a new instance
  marital2: Marital2[] = [];
  readonly baseURL = 'http://localhost:3000/marital2';
  // Marital2: Marital2[];

  constructor(private http: HttpClient) { }

  postMarital2(sib: Marital2): Observable<any> {
    return this.http.post(this.baseURL, sib);
  }

  getMarital2List(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putMarital2(sib: Marital2): Observable<any> {
    return this.http.put(this.baseURL + `/${sib._id}`, sib);
  }

  deleteMarital2(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
