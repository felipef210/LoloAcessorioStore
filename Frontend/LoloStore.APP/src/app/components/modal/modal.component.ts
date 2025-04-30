import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() titulo: string = '';
  @Input() conteudo: string = '';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
