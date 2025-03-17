import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginCadastroComponent } from './pages/login-cadastro/login-cadastro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'login-cadastro',
    component: LoginCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
