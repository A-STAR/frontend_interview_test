import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

  api = `${environment.api}/v${environment.version}`;

  constructor(private http: HttpClient) { }

  get(path: string, options?: Object) {
    return this.http.get(`${this.api}${path}`, options);
  }

  post(path: string, body: any | null, options?: Object) {
    return this.http.post(`${this.api}${path}`, body, options);
  }

  put(path: string, body: any | null, options?: Object) {
    return this.http.put(`${this.api}${path}`, body, options);
  }

  delete(path: string, options?: Object) {
    return this.http.delete(`${this.api}${path}`, options);
  }

}
