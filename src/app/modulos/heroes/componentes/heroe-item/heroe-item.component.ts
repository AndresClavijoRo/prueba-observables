import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-heroe-item',
  templateUrl: './heroe-item.component.html',
  styleUrls: ['./heroe-item.component.scss']
})
export class HeroeItemComponent {
  @Input() heroe: any;
  @Output() heroeOutput = new EventEmitter<any>();

  clickHeroe() {
    console.log(`Heroe clickeado desde el hijo ${this.heroe.nombre}`);
    this.heroeOutput.emit(this.heroe.nombre);
  }
}
