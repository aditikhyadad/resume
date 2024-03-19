import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Treatment } from './treatment.model';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  selectedTreatment: Treatment = new Treatment(); // Use parentheses to create a new instance
  Treatment: Treatment[] = [];
  readonly baseURL = 'http://localhost:3000/treatment';

  constructor(private http: HttpClient) { }

  postTreatment(treat: Treatment): Observable<any> {
    return this.http.post(this.baseURL, treat);
  }

  getTreatmentList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putTreatment(treat: Treatment): Observable<any> {
    return this.http.put(this.baseURL + `/${treat._id}`, treat);
  }

  deleteTreatment(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
