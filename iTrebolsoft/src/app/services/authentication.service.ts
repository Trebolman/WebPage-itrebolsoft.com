import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

export interface CredencialIngreso {
  userName: string;
  password: string;
}

export interface CredencialRegistro {
  UserName: string;
  UserFirstName: string;
  UserLastName: string;
  UserGit: string;
  UserEmail: string;
  UserRole?: string;
  UserPhone: string;
  UserPhoto: string;
  UserAddress: string;
  UserWeb: string;
  Password: string;
  ConfirmPassword: string;
}

export interface TokenResponse {
  UserName: string;
  token: string;
}

@Injectable()
export class AuthenticationService {
  public baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) { }

  Ingresar(payload: CredencialIngreso): Observable<any> {
    return this._http.post(this.baseUrl + '/api/Authentication/LogIn', payload);
  }

  Registrar(payload: CredencialRegistro): Observable<any> {
    return this._http.post(this.baseUrl + '/api/User', payload);
  }

  Salir(): void {
    localStorage.removeItem('UserId');
  }

  isLogged(): boolean {
    if (localStorage.getItem('UserId'))
      return true;
    else return false;
  }

  ObtenerIdUsuario(): string {
    return JSON.parse(localStorage.getItem('UserId'));
  }
}
