import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroePageComponent } from './pages/heroe-page/heroe-page.component';

const routes: Routes = [
  {
    path: 'heroe-page', component: HeroePageComponent
  },
  {
    path: '**',
    redirectTo: 'heroe-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroeRoutingModule { }
