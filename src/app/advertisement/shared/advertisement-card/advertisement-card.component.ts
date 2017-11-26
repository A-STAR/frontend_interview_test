import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'advertisement-card',
  templateUrl: './advertisement-card.component.html',
  styleUrls: ['./advertisement-card.component.scss']
})
export class AdvertisementCardComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

}
