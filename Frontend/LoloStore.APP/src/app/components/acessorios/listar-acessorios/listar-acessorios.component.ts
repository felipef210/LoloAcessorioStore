import { Component } from '@angular/core';
import { Acessorio } from '../acessorio';

@Component({
  selector: 'app-listar-acessorios',
  templateUrl: './listar-acessorios.component.html',
  styleUrl: './listar-acessorios.component.css'
})
export class ListarAcessoriosComponent {
  listaAcessorios = [
    {
      id: 1,
      nome: 'Anel Dourado',
      preco: 49.90,
      descricao: 'Anel dourado elegante para diversas ocasiões.',
      classificacao: 'Anéis',
      favorito: false
    },
    {
      id: 2,
      nome: 'Bracelete de Prata',
      preco: 79.90,
      descricao: 'Bracelete de prata sofisticado e ajustável.',
      classificacao: 'Braceletes',
      favorito: true
    },
    {
      id: 3,
      nome: 'Brincos Pérola',
      preco: 39.90,
      descricao: 'Brincos clássicos de pérola para um look elegante.',
      classificacao: 'Brincos',
      favorito: false
    },
    {
      id: 4,
      nome: 'Brincos Pérola',
      preco: 39.90,
      descricao: 'Brincos clássicos de pérola para um look elegante.',
      classificacao: 'Brincos',
      favorito: false
    }
  ];
}
