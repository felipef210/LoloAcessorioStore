import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly apiUrl = 'http://localhost:5198/api/usuario'

  constructor(private http: HttpClient) { }

  
}
