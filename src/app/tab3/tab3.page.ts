import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tamanho = 6;
  valorAtual = 0;
  dados = [
    'assets/dice-red.png', // 0
    'assets/dice.gif'      // 1
  ];
  imagemDado = this.dados[0];

  constructor() { }

  jogarDado() {
    this.imagemDado = this.dados[1];
    this.valorAtual = 0;
    setTimeout(() => {
      this.valorAtual = Math.floor(Math.random() * this.tamanho) + 1;
    }, 2000);
  }

}
