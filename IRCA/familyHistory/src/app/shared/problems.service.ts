import { Injectable } from '@angular/core';
import { Problems } from './problems.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {
  selectedProblems : Problems = new Problems(); // Use parentheses to create a new instance
  problems: Problems[] = [];
  readonly baseURL = 'http://localhost:3000/problems';

  constructor(private http: HttpClient) { }

  postProblems(pb: Problems): Observable<any> {
    return this.http.post(this.baseURL, pb);
  }

  getProblemsList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putProblems(pb: Problems): Observable<any> {
    return this.http.put(this.baseURL + `/${pb._id}`, pb);
  }

  deleteProblems(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  
}
