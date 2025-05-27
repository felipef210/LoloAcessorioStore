import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor{
  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      if(this.tokenService.possuiToken()) {
          const token = this.tokenService.retornarToken();
          request = request.clone({
            setHeaders: {
              'Authorization' : `Bearer ${token}`
            }
          })
        }
      return next.handle(request);
  }
};
