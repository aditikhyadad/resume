import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pattern } from './pattern.model';
@Injectable({
  providedIn: 'root'
})
export class PatternService {

  selectedPattern: Pattern = new Pattern(); // Use parentheses to create a new instance
  pattern: Pattern[] = [];
  readonly baseURL = 'http://localhost:3000/patterns';

  constructor(private http: HttpClient) { }

  postPattern(sib: Pattern): Observable<any> {
    return this.http.post(this.baseURL, sib);
  }

  getPatternList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putPattern(sib: Pattern): Observable<any> {
    return this.http.put(this.baseURL + `/${sib._id}`, sib);
  }

  deletePattern(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
