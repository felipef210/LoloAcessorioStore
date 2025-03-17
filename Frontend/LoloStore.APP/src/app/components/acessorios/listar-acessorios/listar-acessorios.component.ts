import { Component, OnInit } from '@angular/core';
import { Acessorio } from '../../../interfaces/acessorio';
import { AcessorioService } from '../../../services/acessorio.service';

@Component({
  selector: 'app-listar-acessorios',
  templateUrl: './listar-acessorios.component.html',
  styleUrl: './listar-acessorios.component.css'
})
export class ListarAcessoriosComponent implements OnInit {
  listaAcessorios: Acessorio[] = [];

  constructor(private acessorioService: AcessorioService) {}

  ngOnInit(): void {
    this.acessorioService.getAcessorios().subscribe(acessorios => {
      this.listaAcessorios = acessorios;
      console.log(this.listaAcessorios)
    });
  }
}
