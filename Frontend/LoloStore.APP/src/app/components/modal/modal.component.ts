import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isOpen: boolean = false; // Recebe se o modal deve estar aberto ou fechado
  @Output() close = new EventEmitter<void>(); // Evento de fechamento

  closeModal() {
    this.close.emit(); // Emite evento para o componente pai fechar o modal
  }
}
