import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Legalhistory } from './legalhistory.model';

@Injectable({
  providedIn: 'root'
})
export class LegalhistoryService {
  selectedLegalhistory: Legalhistory = new Legalhistory(); // Use parentheses to create a new instance
  Legalhistory: Legalhistory[] = [];
  readonly baseURL = 'http://localhost:3000/Legalhistory';

  constructor(private http: HttpClient) { }

  postLegalhistory(treat: Legalhistory): Observable<any> {
    return this.http.post(this.baseURL, treat);
  }

  getLegalhistoryList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putLegalhistory(treat: Legalhistory): Observable<any> {
    return this.http.put(this.baseURL + `/${treat._id}`, treat);
  }

  deleteLegalhistory(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
