import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Sibling } from './sibling.model';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {
  selectedSibling: Sibling = new Sibling(); // Use parentheses to create a new instance
  sibling: Sibling[] = [];
  readonly baseURL = 'http://localhost:3000/siblings';

  constructor(private http: HttpClient) { }

  postSibling(sib: Sibling): Observable<any> {
    return this.http.post(this.baseURL, sib);
  }

  getSiblingList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putSibling(sib: Sibling): Observable<any> {
    return this.http.put(this.baseURL + `/${sib._id}`, sib);
  }

  deleteSibling(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  
}
