import { Component, Input } from '@angular/core';
import { Acessorio } from '../acessorio';

@Component({
  selector: 'app-acessorio',
  templateUrl: './acessorio.component.html',
  styleUrl: './acessorio.component.css'
})
export class AcessorioComponent {
  @Input() acessorio: Acessorio =
    {
      id: 0,
      nome: '',
      preco: 0,
      descricao: '',
      classificacao: '',
      imagem: [],
      favorito: false
    }
}
