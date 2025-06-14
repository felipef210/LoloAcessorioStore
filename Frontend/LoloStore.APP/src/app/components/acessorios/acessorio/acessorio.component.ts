import { Component, Input } from '@angular/core';
import { Acessorio } from '../../../interfaces/acessorio';

@Component({
  selector: 'app-acessorio',
  templateUrl: './acessorio.component.html',
  styleUrl: './acessorio.component.css'
})
export class AcessorioComponent {
  @Input() acessorio: Acessorio =
    {
      id: 0,
      name: '',
      price: 0,
      description: '',
      category: '',
      images: [],
    }
}
