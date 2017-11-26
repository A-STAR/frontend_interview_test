import { Injectable } from '@angular/core';

import { HttpService } from '../../core/http.service';

@Injectable()
export class AdvertisementsService {

  constructor(private http: HttpService) { }

  advertisements() {
    return this.http.request('GET', '/advertisements');
  }

}
