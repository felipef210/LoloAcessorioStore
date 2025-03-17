import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/paginas/home-page/home-page.component';
import { CatalogoComponent } from './components/paginas/catalogo/catalogo.component';
import { HeaderComponent } from './components/header/header.component';
import { AcessorioComponent } from './components/acessorios/acessorio/acessorio.component';
import { ListarAcessoriosComponent } from './components/acessorios/listar-acessorios/listar-acessorios.component';
import { DetalheAcessorioComponent } from './components/acessorios/detalhe-acessorio/detalhe-acessorio.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
import { LoginCadastroComponent } from './components/paginas/login-cadastro/login-cadastro.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CatalogoComponent,
    HeaderComponent,
    AcessorioComponent,
    ListarAcessoriosComponent,
    DetalheAcessorioComponent,
    FooterComponent,
    UsuarioComponent,
    LoginCadastroComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
