import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  menuCategoria: string[] = ['Todos os produtos', 'Anel', 'Bracelete', 'Brinco', 'Colar', 'Pulseira'];
  categoriaSelecionada: string = this.menuCategoria[0];

  ordemSelecionada: string = '';

  selecionarCategoria(item: string) {
    this.categoriaSelecionada = item;
  }
}
