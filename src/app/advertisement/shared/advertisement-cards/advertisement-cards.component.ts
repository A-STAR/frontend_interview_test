import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AdvertisementsService } from '../advertisements.service';


@Component({
  selector: 'advertisement-cards',
  templateUrl: './advertisement-cards.component.html',
  styleUrls: ['./advertisement-cards.component.scss']
})
export class AdvertisementCardsComponent implements OnInit {

  advertisements$: Observable<any>;

  constructor(private advertisements: AdvertisementsService) { }

  ngOnInit() {
    this.advertisements$ = this.advertisements.advertisements$;
  }

}
