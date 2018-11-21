import { MensajeService } from './../../mensaje/mensaje.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TalenLoginGuardService {

    constructor(private router: Router, private mensajeService: MensajeService) { }

    canActivate() {
        let isLogged: any = localStorage.getItem('Usuario');

        if (isLogged) {
            isLogged = JSON.parse(isLogged)
            let fechaLog = isLogged.fecha;
            let fechaAct = Date.now();

            var fechaDiff = (fechaAct - fechaLog) / (1000 * 60);
            if (fechaDiff < 10) {
                isLogged.fecha = Date.now()
                localStorage.setItem('Usuario', JSON.stringify(isLogged));
                console.log('Is loggin');
                return true;

            } else {
                this.mensajeService.enviarMensaje('Error', 'Su session ha expirado', 'error');
                return this.logout();
            }
        } else {
            return this.logout();
        }
    }

    logout() {
        console.log('Is not logging');
        localStorage.clear();
        let link = ["/"];
        this.router.navigate(link);
        return false;

    }
}
