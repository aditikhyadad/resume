import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
}) 
export class PatientService {

  selectedPatient: Patient = new Patient(); // Use parentheses to create a new instance
  Patient: Patient[] = [];
  readonly baseURL = 'http://localhost:3000/patients';

  constructor(private http: HttpClient) { }

  postPatient(treat: Patient): Observable<any> {
    return this.http.post(this.baseURL, treat);
  }

  getPatientList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putPatient(treat: Patient): Observable<any> {
    return this.http.put(this.baseURL + `/${treat._id}`, treat);
  }

  deletePatient(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  checkRegistrationNoExists(registrationNo: number): Observable<boolean> {
    // Assuming your backend endpoint is '/api/checkRegistrationNo/:registrationNo'
    const url = `${this.baseURL}/checkRegistrationNo/${registrationNo}`;
    return this.http.get<boolean>(url);
  }
}
