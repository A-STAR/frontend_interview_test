import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  private request(request: HttpRequest<any>): HttpRequest<any> {
    const api = `${environment.api}/v${environment.version}`;

    return request.clone({ url: `${api}${request.url}` });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.request(request));
  }

}
