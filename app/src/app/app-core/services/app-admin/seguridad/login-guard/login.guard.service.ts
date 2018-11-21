import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DatosSessionService } from '../datos-session/datos-session.service';
import config from '../../../app-admin/configuracion/config';

@Injectable()
export class LoginGuardService implements CanActivate {
    constructor(
        private cookieService: CookieService,
        private router: Router,
        // private auth: AuthService
        private datosSessionService: DatosSessionService
    ) {}

    canActivate() {
        const tokenSession = this.datosSessionService.verificarToken();
        if (tokenSession != null) {
            console.log('Token correcto');
            return true;
        } else {
            console.log('Token NO VALIDO');
            window.location.replace(config.Login);
            return false;
        }
    }
}
