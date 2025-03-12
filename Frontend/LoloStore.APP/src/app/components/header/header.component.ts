import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems: string[] = ['Todos os produtos', 'Anéis', 'Braceletes', 'Brincos', 'Colares', 'Pulseiras'];
  itemSelecionado: string = this.menuItems[0];

  selecionarItem(item: string) {
    this.itemSelecionado = item;
  }
}
