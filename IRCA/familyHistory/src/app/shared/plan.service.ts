import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Plan } from './plan.model';
@Injectable({
  providedIn: 'root'
})
export class PlanService {
  selectedPlan:Plan=new Plan();
  plan:Plan[] = [];
  readonly baseURL='http://localhost:3000/plans';

  constructor(private http: HttpClient) { }

  postPlan(pla:Plan): Observable<any> {
    return this.http.post(this.baseURL, pla);
  }

  getPlanList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putPlan(pla:Plan): Observable<any> {
    return this.http.put(this.baseURL + `/${pla._id}`, pla);
  }

  deletePlan(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
