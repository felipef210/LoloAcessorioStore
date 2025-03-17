import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {
  formularioLogin: FormGroup | any;
  formularioCadastro: FormGroup | any;


  formularioSelecionado: string = 'login';
  dataNascimento: string = '';

  showPasswordLogin: boolean = false;
  showPasswordCadastro: boolean = false;
  showPasswordConfirmacao: boolean = false;
  isModalOpen: boolean = false;
  isDatePicker: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formularioLogin = new FormGroup({
      emailLogin: new FormControl('', [Validators.required, Validators.email]),
      senhaLogin: new FormControl('', [Validators.required])
    });

    this.formularioCadastro = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
      dataDeNascimento: new FormControl('', [Validators.required]),
      emailCadastro: new FormControl('', [Validators.required, Validators.email]),
      senhaCadastro: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)
      ]),
      confirmaSenhaCadastro: new FormControl('', [Validators.required]),
    });

    // Aplicando a validação personalizada para confirmar as senhas
    this.formularioCadastro.setValidators(this.confirmarSenhas);
  }

  // Função de validação personalizada para a senha
  confirmarSenhas(group: FormGroup) {
    const senha = group.get('senhaCadastro')?.value;
    const confirmaSenha = group.get('confirmaSenhaCadastro')?.value;
    return senha === confirmaSenha ? null : { senhaDiferente: true };
  }

  // Função para alternar a visibilidade das senhas
  togglePassword(tipo: string) {
    if (tipo === 'login')
      this.showPasswordLogin = !this.showPasswordLogin;

    else if (tipo === 'cadastro')
      this.showPasswordCadastro = !this.showPasswordCadastro;

    else if (tipo === 'confirmacao')
      this.showPasswordConfirmacao = !this.showPasswordConfirmacao;
  }

  // Função para alternar entre os formulários de login e cadastro
  mostraFormulario(tipo: string) {
    this.formularioSelecionado = tipo;
  }

  enviarFormulario() {
    if (this.formularioSelecionado === 'login')
      this.logar(this.formularioLogin);

    else
      this.cadastrar(this.formularioCadastro);
  }

  logar(formLogin: FormGroup) {
    if (formLogin.valid) {
      this.formularioLogin.reset();
      this.router.navigate(['/catalogo']);
    }

    else
      console.log('Formulário de login inválido!');
  }

  cadastrar(formCadastro: FormGroup) {
    if (formCadastro.valid)
      this.openModal();

    else
      console.log('Formulário de cadastro inválido!');
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.formularioCadastro.reset();
    this.formularioSelecionado = 'login'
  }
}
