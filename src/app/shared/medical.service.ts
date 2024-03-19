import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medical } from './medical.model';
@Injectable({
  providedIn: 'root'
})
export class MedicalService {
  selectedMedical:Medical=new Medical();
  medicals:Medical[] = [];
  readonly baseURL='http://localhost:3000/medicals';

  constructor(private http: HttpClient) { }

  postMedical(med:Medical): Observable<any> {
    return this.http.post(this.baseURL, med);
  }

  getMedicalList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putMedical(med:Medical): Observable<any> {
    return this.http.put(this.baseURL + `/${med._id}`, med);
  }

  deleteMedical(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
