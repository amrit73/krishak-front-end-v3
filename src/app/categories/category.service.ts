import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL: string = 'http://localhost:90/' + 'categories';

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(this.BASE_URL).pipe(
      tap(_ => this.log('data')),
      catchError(this.handleError())
    );
  }

  public publishBaseUrl() {
    return this.BASE_URL;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return null;
  }


  private log(data: string) {
    return null;
  }

}
