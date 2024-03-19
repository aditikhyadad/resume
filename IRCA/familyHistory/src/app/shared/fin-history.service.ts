import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FinHistory } from './fin-history.model';

@Injectable({
  providedIn: 'root'
})
export class FinHistoryService {

  selectedFinancial: FinHistory = new FinHistory(); // Use parentheses to create a new instance
  FinHistory: FinHistory[] = [];
  readonly baseURL = 'http://localhost:3000/FinHistory';

  constructor(private http: HttpClient) { }

  postFinHistory(treat: FinHistory): Observable<any> {
    return this.http.post(this.baseURL, treat);
  }

  getFinHistoryList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putFinHistory(treat: FinHistory): Observable<any> {
    return this.http.put(this.baseURL + `/${treat._id}`, treat);
  }

  deleteFinHistory(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }}

