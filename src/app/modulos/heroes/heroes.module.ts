import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeItemComponent } from './componentes/heroe-item/heroe-item.component';
import { HeroePoderComponent } from './componentes/heroe-poder/heroe-poder.component';
import { HeroePageComponent } from './pages/heroe-page/heroe-page.component';
import { HeroeRoutingModule } from './heroe-routing.module';



@NgModule({
  declarations: [
    HeroeItemComponent,
    HeroePoderComponent,
    HeroePageComponent
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule
  ]
})
export class HeroesModule { }
