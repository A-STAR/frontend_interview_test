import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'advertisement-card',
  templateUrl: './advertisement-card.component.html',
  styleUrls: ['./advertisement-card.component.scss']
})
export class AdvertisementCardComponent implements OnInit {

  @Input() card: any;

  image: string;
  mieten: boolean;
  kaufen: boolean;

  title: string;

  zip: string;
  city: string;
  street: string;

  price: string;
  rooms: string;
  space: string;

  constructor() { }

  ngOnInit() {
    this.image = this.card
      .advertisementAssets[0]
      .advertisementThumbnails
      .inventory_m
      .url;

    this.tags();

    this.title = this.card.title;

    this.address();

    this.flat();
  }

  tags() {
    const purpose = this.card.purpose;

    if (purpose === 0 || purpose === 3) {
      this.mieten = true;
    }

    if (purpose === 1 || purpose === 3) {
      this.kaufen = true;
    }
  }

  address() {
    this.zip = this.card
      .realestateSummary
      .address
      .postalCode;

    this.city = this.card
      .realestateSummary
      .address
      .city;

    this.street = this.card
      .realestateSummary
      .address
      .street;
  }

  flat() {
    const rent = this.card
      .advertisementPrice
      .baseRent;

    const price = this.card
      .advertisementPrice
      .sellPrice;

    this.price = this.kaufen ? price : rent;

    this.rooms = this.card
      .realestateSummary
      .numberOfRooms;

    this.space = this.card
      .realestateSummary
      .space;
  }

}
