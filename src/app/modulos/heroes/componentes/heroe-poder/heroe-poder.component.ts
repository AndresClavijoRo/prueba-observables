import { Component, Input, OnInit } from '@angular/core';
import { HeroeServiceService } from '../../servicios/heroe-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroe-poder',
  templateUrl: './heroe-poder.component.html',
  styleUrls: ['./heroe-poder.component.scss']
})
export class HeroePoderComponent implements OnInit {
  @Input() poderHeroe: string = '';
  subscription?: Subscription;

  constructor(
    private heroeService: HeroeServiceService
  ) { }

  ngOnInit(): void {
    this.suscribirseMensajeAbuelo();
  }

  comicarAbuelo(mensaje: string) {
    this.heroeService.asignarMensajeAbuelo(mensaje);
  }

  suscribirseMensajeAbuelo() {
    this.subscription = this.heroeService.mensajeANieto$.subscribe({
      next: next => {
        console.log('mensaje desde el nieto', next);
      },
      error: error => {
        console.log('error', error);
      },
      complete: () => {
        console.log('completado');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
