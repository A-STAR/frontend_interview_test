import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../core/http.service';

@Injectable()
export class AdvertisementsService {

  constructor(private http: HttpService) { }

  get advertisements$(): Observable<any> {
    return this.http.get('/advertisements');
  }

}
