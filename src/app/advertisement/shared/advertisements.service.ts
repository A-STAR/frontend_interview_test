import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdvertisementsService {

  constructor(private http: HttpClient) { }

  get advertisements$(): Observable<any> {
    return this.http.get('/advertisements');
  }

}
