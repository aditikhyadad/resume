import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Referral} from './referral.model';
@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  selectedReferral:Referral=new Referral();
  referrals:Referral[] = [];
  readonly baseURL='http://localhost:3000/referrals';

  constructor(private http: HttpClient) { }

  postReferral(ref:Referral): Observable<any> {
    return this.http.post(this.baseURL, ref);
  }

  getReferralList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putReferral(ref:Referral): Observable<any> {
    return this.http.put(this.baseURL + `/${ref._id}`, ref);
  }

  deleteReferral(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
