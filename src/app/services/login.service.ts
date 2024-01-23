import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:4000/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(payload: any): Observable<any> {
    return this.http.post(baseUrl+'/login', payload);
  }
  signup(payload: any): Observable<any> {
    return this.http.post(baseUrl+'/saveUserData', payload);
  }
}
