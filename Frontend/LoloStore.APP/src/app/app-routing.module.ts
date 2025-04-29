import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginCadastroComponent } from './pages/login-cadastro/login-cadastro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'login-cadastro',
    component: LoginCadastroComponent
  },
  {
    path:'perfil',
    component: PerfilComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
