import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  menuCategoria: string[] = ['Todos os produtos', 'Anel', 'Bracelete', 'Brinco', 'Colar', 'Pulseira'];
  categoriaSelecionada: string = this.menuCategoria[0];

  @Output() categoriaChange = new EventEmitter<string>();

  selecionarCategoria(item: string) {
    this.categoriaSelecionada = item;
    this.categoriaChange.emit(item);
  }
}
