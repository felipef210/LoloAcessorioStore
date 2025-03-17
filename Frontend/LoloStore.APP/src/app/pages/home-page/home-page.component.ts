import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  rolarPara(id: string) {
    const elemento = document.getElementById(id);
    if (!elemento) return;

    const inicio = window.scrollY;
    const destino = elemento.offsetTop;
    const duracao = 800;
    const comeco = performance.now();

    function animarScroll(tempoAtual: number) {
      const tempoDecorrido = tempoAtual - comeco;
      const progresso = Math.min(tempoDecorrido / duracao, 1);

      const easeInOutQuad = progresso < 0.5
        ? 2 * progresso * progresso
        : 1 - Math.pow(-2 * progresso + 2, 2) / 2;

      window.scrollTo(0, inicio + (destino - inicio) * easeInOutQuad);

      if (tempoDecorrido < duracao) {
        requestAnimationFrame(animarScroll);
      }
    }

    requestAnimationFrame(animarScroll);
  }
}
