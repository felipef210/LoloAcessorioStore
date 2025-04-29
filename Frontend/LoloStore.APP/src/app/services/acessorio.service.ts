import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acessorio } from '../interfaces/acessorio';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcessorioService {
  private readonly apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  getAcessorios(): Observable<Acessorio[]> {
    return this.http.get<Acessorio[]>(`${this.apiUrl}/acessory`);
  }
}
