import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable()
export class UserService {
  
  constructor(private httpClient: HttpClient) {
    
   }

   createUser(user: User) : Observable<User> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      let httpOptions={headers: headers};
      return this.httpClient.post<User>("http://127.0.0.1:8000/api/register", user, httpOptions)
          .pipe(
              catchError(this.handleError) 
          );
    }

    login(user: User) : Observable<User> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      let httpOptions={headers: headers};
      return this.httpClient.post<User>("http://127.0.0.1:8000/api/login", user, httpOptions)
          .pipe(
              catchError(this.handleError) 
      );
    }

    private handleError(error: HttpErrorResponse) {
        alert('an error happened');
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}