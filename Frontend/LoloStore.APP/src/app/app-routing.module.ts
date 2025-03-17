import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/paginas/home-page/home-page.component';
import { CatalogoComponent } from './components/paginas/catalogo/catalogo.component';
import { LoginCadastroComponent } from './components/paginas/login-cadastro/login-cadastro.component';

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
