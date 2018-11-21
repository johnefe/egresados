import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();
import config from '../../configuracion/config';
import { DatosSessionService } from '../datos-session/datos-session.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private datosSessionService: DatosSessionService,
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let token = '';
    let modulo_id = config.modulo_id.toString();

    let tokenSession = this.datosSessionService.verificarToken();
    if (tokenSession != null) {
      token = tokenSession;
    }

    const authReq = req.clone({ setHeaders: { 'Authorization': 'Bearer ' + token, 'modulo_id': modulo_id } });
    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}