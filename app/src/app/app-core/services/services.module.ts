import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from './app-admin/configuracion/config.service';
import { MensajeService } from './app-admin/mensaje/mensaje.service';
import { LoginGuardService } from './app-admin/seguridad/login-guard/login.guard.service';
import { DatosSessionService } from './app-admin/seguridad/datos-session/datos-session.service';
import { HelpersService } from './app-admin/helpers/helpers.service';


@NgModule({
  providers: [
    CookieService,
    ConfigService,
    MensajeService,
    LoginGuardService,
    DatosSessionService,
    HelpersService
  ]
})
export class ServicesModule {
  constructor() { }
}
