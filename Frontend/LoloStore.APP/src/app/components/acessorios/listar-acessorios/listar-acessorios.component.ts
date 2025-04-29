import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Acessorio } from '../../../interfaces/acessorio';
import { AcessorioService } from '../../../services/acessorio.service';

@Component({
  selector: 'app-listar-acessorios',
  templateUrl: './listar-acessorios.component.html',
  styleUrl: './listar-acessorios.component.css'
})
export class ListarAcessoriosComponent implements OnInit, OnChanges {
  listaAcessorios: Acessorio[] = [];
  @Input() categoriaSelecionada: string = 'Todos os produtos';
  @Input() ordemSelecionada: string = '';

  constructor(private acessorioService: AcessorioService) {}

  ngOnInit(): void {
    this.listarAcessorios();
  }

  ngOnChanges(): void {
    this.listarAcessorios();
  }

  listarAcessorios() {
    this.acessorioService.getAcessorios().subscribe((acessorios) => {
      let filtroCategoria = this.categoriaSelecionada === 'Todos os produtos'
      ? acessorios
      : acessorios.filter(a => a.category === this.categoriaSelecionada);

      if (this.ordemSelecionada === 'menor-preco')
        this.listaAcessorios = filtroCategoria.sort((a, b) => a.price - b.price);

      else if (this.ordemSelecionada === 'maior-preco')
        this.listaAcessorios = filtroCategoria.sort((a, b) => b.price - a.price);

      else
        this.listaAcessorios = filtroCategoria;
    });
  }
}
