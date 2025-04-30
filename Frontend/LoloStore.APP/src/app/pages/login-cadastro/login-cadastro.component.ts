import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { CadastroService } from '../../services/cadastro.service';
import { Usuario } from '../../interfaces/usuario';

type TipoDeFormulario = 'login' | 'cadastro';

enum CamposDeSenha {
  LOGIN = 'login',
  CADASTRO_SENHA = 'password',
  CONFIRMA_CADASTRO = 'repassword'
};

enum TiposDeFormulario {
  LOGIN = 'login',
  CADASTRO = 'cadastro'
};

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})

export class LoginCadastroComponent implements OnInit {
  formularioLogin: FormGroup | any;
  formularioCadastro: FormGroup | any;


  formularioSelecionado: TipoDeFormulario = TiposDeFormulario.LOGIN;
  dataNascimento: string = '';
  mensagemErroCadastro: string | null = null;
  mensagemErroLogin: string | null = null;
  tituloModal: string = 'Cadastro';
  conteudoModal: string = 'Cadastro efetuado com sucesso!';

  showPasswordLogin: boolean = false;
  showPasswordCadastro: boolean = false;
  showPasswordConfirmacao: boolean = false;
  isModalOpen: boolean = false;
  isDatePicker: boolean = false;

  constructor(
    private router: Router,
    private autenticacaoService: AutenticacaoService,
    private cadastroService: CadastroService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });

    this.formularioCadastro = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      birthDate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)
      ]),
      repassword: new FormControl('', [Validators.required]),
    });

    this.formularioCadastro.setValidators(this.confirmarSenhas);

    this.formularioCadastro.valueChanges.subscribe(() => {
      this.mensagemErroCadastro = null;
    });

    this.formularioLogin.valueChanges.subscribe(() => {
      this.mensagemErroLogin = null;
    });
  }


  confirmarSenhas(group: FormGroup) {
    const senha = group.get(CamposDeSenha.CADASTRO_SENHA)?.value;
    const confirmaSenha = group.get(CamposDeSenha.CONFIRMA_CADASTRO)?.value;
    return senha === confirmaSenha ? null : { senhaDiferente: true };
  }


  togglePassword(campo: string) {
    if (campo === CamposDeSenha.LOGIN)
      this.showPasswordLogin = !this.showPasswordLogin;

    else if (campo === CamposDeSenha.CADASTRO_SENHA)
      this.showPasswordCadastro = !this.showPasswordCadastro;

    else if (campo === CamposDeSenha.CONFIRMA_CADASTRO)
      this.showPasswordConfirmacao = !this.showPasswordConfirmacao;
  }

  mostraFormulario(tipo: TipoDeFormulario) {
    this.formularioSelecionado = tipo;
  }

  enviarFormulario() {
    if (this.formularioSelecionado === TiposDeFormulario.LOGIN)
      this.logar(this.formularioLogin);

    else
      this.cadastrar(this.formularioCadastro);
  }

  logar(formLogin: FormGroup) {
    const email = this.formularioLogin.value.email;
    const senha = this.formularioLogin.value.password;

    if (formLogin.valid) {
      this.autenticacaoService.autenticar(email, senha).subscribe({
        next: (value) => {
          console.log('Login realizado com sucesso!', value);
          this.formularioLogin.reset();
          this.router.navigate(['/catalogo']);
          this.mensagemErroLogin = null;
        },
        error: (err) => {
          console.log('Erro ao efetuar login', err);
          this.mensagemErroLogin = 'E-mail ou senha inválido';
        }
      });
    }
  }

  cadastrar(formCadastro: FormGroup) {
    if (formCadastro.valid) {
      const novoCadastro = formCadastro.getRawValue() as Usuario
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: () => {
          this.mensagemErroCadastro = null;
          this.openModal();
        },
        error: (err) => {
          console.log('Erro ao efetuar cadastro', err);
          this.mensagemErroCadastro = '*' + err?.error;
        }
      });
    }
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
