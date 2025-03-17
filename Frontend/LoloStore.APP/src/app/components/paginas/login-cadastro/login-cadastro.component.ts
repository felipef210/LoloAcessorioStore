import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent {
  formularioSelecionado: string = 'login';
  
  showPasswordLogin: boolean = false;
  showPasswordCadastro: boolean = false;
  showPasswordConfirmacao: boolean = false;
  isModalOpen: boolean = false;

  constructor(private router: Router) { }

  mostraFormulario(form: string) {
    this.formularioSelecionado = form;
    this.showPasswordLogin = false;
    this.showPasswordCadastro = false;
    this.showPasswordConfirmacao = false;
  }

  togglePassword(campo: string) {
    if (campo === 'login')
      this.showPasswordLogin = !this.showPasswordLogin;
    
    else if (campo === 'cadastro')
      this.showPasswordCadastro = !this.showPasswordCadastro;
    
    else if (campo === 'confirmacao')
      this.showPasswordConfirmacao = !this.showPasswordConfirmacao;
  }

  enviarFormulario(formulario: NgForm) {
    if (this.formularioSelecionado === 'login')
      this.logar(formulario);

    else
      this.cadastrar(formulario);
  }

  logar(formLogin: NgForm) {
    if (formLogin.valid)
      this.router.navigate(['/catalogo']);
  }

  cadastrar(formCadastro: NgForm) {
    if (formCadastro.valid)
      this.openModal();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
