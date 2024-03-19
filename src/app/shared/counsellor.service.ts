import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Counsellor } from './counsellor.model';
@Injectable({
  providedIn: 'root'
})
export class CounsellorService {
  selectedCounsellor:Counsellor=new Counsellor();
  counsellor:Counsellor[]=[];
  readonly baseURL='http://localhost:3000/counsellors/'
  constructor(private http:HttpClient) { }
  postCounsellor(coun:Counsellor):Observable<any>{
    return this.http.post(this.baseURL,coun);
  }
  getCounsellorList():Observable<any>{
    return this.http.get(this.baseURL);
  }
  putCounsellor(coun:Counsellor):Observable<any>{
    return this.http.put(this.baseURL+ `/${coun._id}`,coun);
  }
  deleteCounsellor(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
