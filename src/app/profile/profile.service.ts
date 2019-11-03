import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BASE_URL: string = 'http://localhost:90/users/me';

  constructor(private http: HttpClient) {
  }

  getData(loctoken) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + loctoken
    });
    return this.http.get(this.BASE_URL, { headers: headers });
  }

  public publishBaseUrl() {
    return this.BASE_URL;
  }


}
