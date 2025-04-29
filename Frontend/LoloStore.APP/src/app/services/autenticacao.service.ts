import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Observable, tap } from 'rxjs';

interface AuthResponse {
  access_token: string
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiURL = environment.apiURL;


  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autenticar(email: string, senha: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(`${this.apiURL}/User/login`,
    { email: email, password: senha }, { observe: 'response' }).pipe(
      tap((response) => {
        const authToken = response.body?.access_token || '';
        this.usuarioService.salvarToken(authToken);
      })
    );
  }
}
