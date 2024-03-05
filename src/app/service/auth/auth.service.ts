import { AuthRequest } from './../../model/AuthRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  generateToken(authRequest: AuthRequest): Observable<any> {
    return this.http
      .post(environment.API_URL_GENERATE_TOKEN, authRequest, {
        responseType: 'text',
        observe: 'response',
      })
      .pipe(
        map((resp) => {
          if(resp.status == 200 ){
            localStorage.setItem(environment.JWT_KEY, JSON.stringify(resp.body));
            
          }
        })
      );
  }
}
