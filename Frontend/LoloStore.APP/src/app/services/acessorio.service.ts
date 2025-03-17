import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acessorio } from '../interfaces/acessorio';

@Injectable({
  providedIn: 'root'
})
export class AcessorioService {
  private readonly apiUrl = 'http://localhost:5198/api/acessorio'

  constructor(private http: HttpClient) { }

  getAcessorios(): Observable<Acessorio[]> {
    return this.http.get<Acessorio[]>(`${this.apiUrl}`);
  }
}
