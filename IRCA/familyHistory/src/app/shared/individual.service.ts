import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Individual } from './individual.model';
@Injectable({
  providedIn: 'root'
})
export class IndividualService {
  selectedIndividual:Individual=new Individual();
  individuals:Individual[]=[];
  readonly baseURL='http://localhost:3000/individuals/'
  constructor(private http:HttpClient) { }
  postIndividual(indi:Individual):Observable<any>{
    return this.http.post(this.baseURL,indi);
  }
  getIndividualList():Observable<any>{
    return this.http.get(this.baseURL);
  }
  putIndividual(indi:Individual):Observable<any>{
    return this.http.put(this.baseURL+ `/${indi._id}`,indi);
  }
  deleteIndividual(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
