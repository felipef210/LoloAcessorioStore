import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { TokenService } from '../../services/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { CadastroService } from '../../services/cadastro.service';

enum CamposDeSenha {
  SENHA_ATUAL = 'passNow',
  CADASTRO_SENHA = 'password',
  CONFIRMA_CADASTRO = 'repassword'
};

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  perfilForm!: FormGroup;
  usuarioLogado!: Usuario;
  campoDesabilitado: boolean = true;
  showPasswordNow: boolean = false;
  showPassword: boolean = false;
  showPasswordConfirmation: boolean = false;
  isModalOpen: boolean = false;
  tituloModal: string = 'Atualizado';
  conteudoModal: string = 'Cadastro atualizado com sucesso!';


  constructor(
    private usuarioService: UsuarioService,
    private cadastroService: CadastroService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroService.buscarCadastro().subscribe((usuario) => {
      if (usuario) {
        this.usuarioLogado = usuario;
        this.inicializarFormulario();
      }
    });
  }

  inicializarFormulario() {
    this.perfilForm = this.formBuilder.group({
      name: [this.usuarioLogado.name, Validators.required],
      birthDate: [this.usuarioLogado.birthDate, Validators.required],
      email: [this.usuarioLogado.email, [Validators.required, Validators.email]],
      passNow: ['', Validators.required],
      password: [{ value: '', disabled: true }, [Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)]],
      rePassword: [{ value: '', disabled: true }],
      reEmail: [this.usuarioLogado.email, [Validators.required, Validators.email]],
      gender: [this.usuarioLogado.gender, Validators.required],
      changePassword: [false]
    }, {
      validators: [this.confirmarEmailsIguais(), this.confirmarSenhasIguais()]
    });

    // Habilitar/desabilitar dinamicamente os campos de senha
    this.perfilForm.get('changePassword')?.valueChanges.subscribe((trocarSenha) => {
      const passwordControl = this.perfilForm.get('password');
      const rePasswordControl = this.perfilForm.get('rePassword');

      if (trocarSenha) {
        passwordControl?.setValue('');
        rePasswordControl?.setValue('');
        passwordControl?.enable();
        rePasswordControl?.enable();
        passwordControl?.setValidators([
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)
        ]);
        rePasswordControl?.setValidators([Validators.required]);
      }
      else {
        passwordControl?.disable();
        rePasswordControl?.disable();
        passwordControl?.clearValidators();
        rePasswordControl?.clearValidators();
      }

      passwordControl?.updateValueAndValidity();
      rePasswordControl?.updateValueAndValidity();
    });
  }

  confirmarEmailsIguais() {
    return (group: FormGroup) => {
      const email = group.get('email')?.value;
      const reEmail = group.get('reEmail')?.value;
      return email === reEmail ? null : { emailDiferente: true }
    }
  }
  confirmarSenhasIguais() {
    return (group: FormGroup) => {
      const password = group.get('password')?.value;
      const rePassword = group.get('rePassword')?.value;
      return password === rePassword ? null : { senhaDiferente: true }
    }
  }

  togglePassword(campo: string) {
    if (campo === CamposDeSenha.SENHA_ATUAL)
      this.showPasswordNow = !this.showPasswordNow;

    else if (campo === CamposDeSenha.CADASTRO_SENHA)
      this.showPassword = !this.showPassword;

    else if (campo === CamposDeSenha.CONFIRMA_CADASTRO)
      this.showPasswordConfirmation = !this.showPasswordConfirmation;
  }

  atualizar(form: FormGroup) {
    if(form.valid) {
      const usuarioAtualizado = form.getRawValue();

      if (form.get('changePassword')?.value) {
        if (form.get('password')?.value !== form.get('rePassword')?.value) {
          this.perfilForm.get('rePassword')?.setErrors({ senhaDiferente: true });
          return;
        }
        usuarioAtualizado.password = form.get('password')?.value;
      }
      else {
        usuarioAtualizado.password = form.get('passNow')?.value;
        usuarioAtualizado.rePassword = form.get('passNow')?.value;
      }

      this.cadastroService.editarCadastro(usuarioAtualizado).subscribe({
        next: () => {
          this.openModal();
        },
        error: (err) => {
          if (err.status === 401 && err.error === 'Senha atual inválida!') {
            this.perfilForm.get('passNow')?.setErrors({ senhaIncorreta: true });
          }
          else
          console.log(err);

        }
      });
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.router.navigate(['/catalogo']);
  }

}
