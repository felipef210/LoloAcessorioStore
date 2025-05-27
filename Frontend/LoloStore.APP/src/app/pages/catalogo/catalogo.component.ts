import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  categoriaSelecionada: string = 'Todos os produtos';
  ordemSelecionada: string = '';
}
