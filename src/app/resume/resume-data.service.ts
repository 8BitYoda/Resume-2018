import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IResumeData } from './resume-data';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  private resDataUrl = 'api/resume/data.json';

  constructor(private http: HttpClient) { }

  getResumeData(): Observable<IResumeData> {
    return this.http.get<IResumeData>(this.resDataUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An Error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
