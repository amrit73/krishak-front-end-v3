import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL: string = 'http://localhost:90/' + 'getproducts';

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
