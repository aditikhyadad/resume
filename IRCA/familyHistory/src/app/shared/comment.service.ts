import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  selectedComment: Comment = new Comment(); // Use parentheses to create a new instance
  Comment: Comment[] = [];
  readonly baseURL = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) { }

  postComment(sib: Comment): Observable<any> {
    return this.http.post(this.baseURL, sib);
  }

  getCommentList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  putComment(sib: Comment): Observable<any> {
    return this.http.put(this.baseURL + `/${sib._id}`, sib);
  }

  deleteComment(_id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
