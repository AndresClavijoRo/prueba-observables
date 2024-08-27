import { Component, Inject, OnInit } from '@angular/core';
import { HeroeServiceService } from '../../servicios/heroe-service.service';

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styleUrls: ['./heroe-page.component.scss']
})
export class HeroePageComponent implements OnInit {
  constructor(public heroeService: HeroeServiceService) { }


  ngOnInit(): void {
    const resultado = this.heroeService.sumarPoder('1', '2');
    console.log(resultado);
  }


  heroes = [
    {
      nombre: 'Superman',
      biografia: 'Superman es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por DC Comics. El personaje fue creado por el escritor Jerry Siegel y el artista Joe Shuster, y apareció por primera vez en Action Comics #1, una revista de antología publicada el 18 de abril de 1938. El personaje regularmente aparece en cómics publicados por DC, y ha sido adaptado a una serie de programas de radio, programas de televisión y películas.',
      poderes: [
        'Super fuerza',
        'Volar',
        'Rayos X'
      ]
    },
    {
      nombre: 'Batman',
      biografia: 'Batman es un personaje ficticio, un superhéroe que aparece en los cómics estadounidenses publicados por DC Comics. El personaje fue creado por el artista Bob Kane y el escritor Bill Finger, y apareció por primera vez en Detective Comics #27. Originalmente llamado',
      poderes: [
        'Super fuerza',
        'Volar',
        'Nadar'
      ]
    }
  ]

  heroeCLicPadre(nombre: string) {
    const resultado = this.heroeService.sumarPoder('1', '2');
    console.log(resultado);
    console.log(`Heroe clickeado desde el padre ${nombre}`);
  }
}
