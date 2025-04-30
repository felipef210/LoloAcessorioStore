import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { TokenService } from '../../services/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { CadastroService } from '../../services/cadastro.service';

enum CamposDeSenha {
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
    const birthDateFormatada = this.formatarData(this.usuarioLogado.birthDate);

    this.perfilForm = this.formBuilder.group({
      name: [this.usuarioLogado.name, Validators.required],
      birthDate: [birthDateFormatada, Validators.required],
      email: [this.usuarioLogado.email, Validators.required],
      password: [''],
      rePassword: [''],
      reEmail: [this.usuarioLogado.email, Validators.required],
      gender: [this.usuarioLogado.gender, Validators.required]
    });
  }

  formatarData(data: string | Date): string {
    const d = new Date(data);
    const ano = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const dia = String(d.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }

  togglePassword(campo: string) {
    if (campo === CamposDeSenha.CADASTRO_SENHA)
      this.showPassword = !this.showPassword;

    else if (campo === CamposDeSenha.CONFIRMA_CADASTRO)
      this.showPasswordConfirmation = !this.showPasswordConfirmation;
  }

  atualizar(form: FormGroup) {
    if(form.valid) {
      const usuarioAtualizado = form.getRawValue() as Usuario;
      this.cadastroService.editarCadastro(usuarioAtualizado).subscribe(() => {
        this.openModal();
      })
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
