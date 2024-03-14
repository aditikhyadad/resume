import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Activity } from './activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  selectedActivity: Activity = new Activity();
  activities: Activity[] = [];
  readonly baseURL = 'http://localhost:3000/activity';

  constructor(private http: HttpClient) { }

  
  postActivity(activity: Activity): Observable<any> {
    // const url = `${this.baseURL}/${activity.id}`; // Assuming 'id' is the identifier for the activity
    return this.http.post(this.baseURL, activity)
      .pipe(
        catchError(error => {
          console.error('Error in postActivity:', error);
          return throwError(error);
        })
      );
  }
  
  

  getActivities(activityId?: string): Observable<Activity[]> {
    const url = activityId ? `${this.baseURL}/${activityId}` : this.baseURL;
    return this.http.get<Activity[]>(url);
  }
  
}

