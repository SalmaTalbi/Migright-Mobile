import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router'
import { MemberModel } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  // API path
  basePath = 'http://localhost:8080';

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  // Get data from server for Dashboard
  getMembers(): Observable<MemberModel[]> {
    return this.http
      .get<MemberModel[]>(this.basePath + '/api/user/getUsers')
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getMemberById(id): Observable<MemberModel[]> {
    return this.http
      .get<MemberModel[]>(this.basePath + '/api/user/getUser/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


}

