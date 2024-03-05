import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GenericUser } from "../../model/GenericUser";
import { Observable, map } from "rxjs";
import { Utente } from "../../model/Utente";
import { environment } from "../../../environments/environment.development";
import { Cliente } from "../../model/Cliente";


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  register(__genericUser: GenericUser): Observable<any> {
    if (__genericUser.grant == 2){
      return this.http.post<Utente>(environment.API_URL_REGISTER_USER, __genericUser.toUtente())
      .pipe(map((resp) => resp));
    } else {
      return this.http.post<Cliente>(environment.API_URL_REGISTER_CLIENT, __genericUser.toCliente())
      .pipe(map((resp) => resp));
    }
  }}
