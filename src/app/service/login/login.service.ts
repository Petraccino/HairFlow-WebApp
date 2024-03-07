import { AuthRequest } from './../../model/AuthRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Admin } from '../../model/Admin';
import { environment } from '../../../environments/environment.development';
import { Utente } from '../../model/Utente';
import { Cliente } from '../../model/Cliente';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  login(authRequest: AuthRequest): Observable<any> {
    if (authRequest.grant == 1) {
      return this.http
        .post<Admin>(environment.API_URL_LOGIN_ADMIN, authRequest, {observe: 'response'})
        .pipe(map((resp) => {
          if(resp.status == 200){
            this.authService.generateToken(authRequest).subscribe();
          } else {
            throw new Error("Credenziali non valide");
          }
        }));
    } else if (authRequest.grant == 2) {
      return this.http
        .post<Utente>(environment.API_URL_LOGIN_USER, authRequest, {observe: 'response'})
        .pipe(map((resp) => {
          if(resp.status == 200){
            this.authService.generateToken(authRequest).subscribe();
          } else {
            throw new Error("Credenziali non valide");
          }
        }));
    } else {
      return this.http
        .post<Cliente>(environment.API_URL_LOGIN_CLIENT, authRequest, {observe: 'response'})
        .pipe(map((resp) => {
          if(resp.status == 200){
            this.authService.generateToken(authRequest).subscribe();
          } else {
            throw new Error("Credenziali non valide");
          }
        }));
    }
  }
}
