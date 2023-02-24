import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, retryWhen } from 'rxjs/operators';
import { User } from '../models/User';
import { LocalStorageService } from './local-storage-service';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  
  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService, private router: Router) {
    
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

    isLoggedInUser() {
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('X-Auth-Token',this.localStorageService.getToken());
      let httpOptions={headers: headers};
      return this.httpClient.get<any>("http://localhost:8000/api/protected/isLoggedIn", httpOptions);
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } 
        else if(error.status === 401) {
          console.log('unautorised');
          return new Observable<User>;
        }
        else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}