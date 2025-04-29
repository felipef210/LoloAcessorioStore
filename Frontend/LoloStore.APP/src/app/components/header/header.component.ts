import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  user$: Observable<Usuario | null> = this.usuarioService.retornarUser();

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['/home']);
  }
}
