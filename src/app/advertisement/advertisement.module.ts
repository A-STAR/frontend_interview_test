import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { MaterialModule } from '../material/material.module';

import { AdvertisementsComponent } from './advertisements.component';
import { AdvertisementCardsComponent } from './shared/advertisement-cards/advertisement-cards.component';
import { AdvertisementCardComponent } from './shared/advertisement-card/advertisement-card.component';
import { AdvertisementsService } from './shared/advertisements.service';

@NgModule({
  imports: [
    CommonModule,
    AdvertisementRoutingModule,
    MaterialModule
  ],
  declarations: [
    AdvertisementsComponent,
    AdvertisementCardsComponent,
    AdvertisementCardComponent
  ],
  providers: [AdvertisementsService]
})
export class AdvertisementModule { }
