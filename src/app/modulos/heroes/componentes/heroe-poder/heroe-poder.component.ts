import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-poder',
  templateUrl: './heroe-poder.component.html',
  styleUrls: ['./heroe-poder.component.scss']
})
export class HeroePoderComponent {
  @Input() poderHeroe: string = '';
}
