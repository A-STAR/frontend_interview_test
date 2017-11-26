import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertisementCardsComponent } from './shared/advertisement-cards/advertisement-cards.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementRoutingModule { }
