import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeServiceService {
  private mensajeAabuelo = new BehaviorSubject<string>("nada");
  public mensajeAabuelo$ = this.mensajeAabuelo.asObservable();

  public mensajeANieto = new BehaviorSubject<any>(null);
  public mensajeANieto$ = this.mensajeANieto.asObservable();

  constructor() { }

  public sumarPoder(num1: string, num2: string) {
    return num1 + num2;
  }
  /*
  * Setea el titulo a agregar
  * @param titulo titulo a agregar en app.component
  */
  asignarMensajeAbuelo(mensaje: string) {
    this.mensajeAabuelo.next(mensaje);
  }

  asignarMensajeNieto(heroe: any) {
    this.mensajeANieto.next(heroe);
  }
}
