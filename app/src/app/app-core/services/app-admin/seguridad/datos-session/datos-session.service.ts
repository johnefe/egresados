import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Injectable()
export class DatosSessionService {

  nomKeyToken: string;

  constructor(
    private cookieService: CookieService
  ) {
    this.nomKeyToken = 'udenar';
  }

  verificarToken() {
    let token = null;

    const tokenExists: boolean = this.cookieService.check(this.nomKeyToken);

    if (tokenExists) {
      try {
        //obtemos el token
        let cookieToken = this.cookieService.get(this.nomKeyToken);

        //decodificamos si es necesario
        //const decodedToken = helper.decodeToken(token);

        //Verificamos si esta vigente
        const isExpired = helper.isTokenExpired(cookieToken);
        if (!isExpired) {
          console.log("expiradito");
          token = cookieToken;
        }
      } catch (error) {

      }
    }
    return token;
  }


  obtenerIp(){
    var variable=localStorage["ip_equipo"];
    return variable;
  };

  incializar() {
    console.log("cositas");
    return true;
  }

}