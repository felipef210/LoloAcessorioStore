import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  menuItems: string[] = ['Todos os produtos', 'Anéis', 'Braceletes', 'Brincos', 'Colares', 'Pulseiras'];
  itemSelecionado: string = this.menuItems[0];

  selecionarItem(item: string) {
    this.itemSelecionado = item;
  }
}
