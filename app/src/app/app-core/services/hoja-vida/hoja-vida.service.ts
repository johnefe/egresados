import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ServiceBase } from "../service-base";
import config from "../app-admin/configuracion/config";

@Injectable({
    providedIn: "root"
})
export class HojaVidaService extends ServiceBase {
    constructor(protected http: HttpClient) {
        super(http);
        this.ApiUrl = [config.ApiUrl, config.petUrl].join("/");
    }

    /**
     * Permite crear la hoja de vida
     * @param {json}persona datos con la información de la persona que crea su hoja de vida
     * @returns confirmacion de la creacion de la persona
     */
    public crearHojaVida(persona): Observable<any> {
        let ruta = [this.ApiUrl, "createHojaVida"].join("/");
        return this.http.post(ruta, persona);
    }

    /**
     * Permite obtener los parametros generales necesarios para la hoja de vida
     */
    public getParametros(): Observable<any> {
        let ruta = [this.ApiUrl, "getParamGeneral"].join("/");        
        return this.http.post(ruta,{});
    }

    /**
     * Permite obtener los parametros generales necesarios para la hoja de vida
     */
    public getCiudades(name): Observable<any> {
        let ruta = [this.ApiUrl, "getCiudades"].join("/");        
        return this.http.post(ruta,{});
    }

    /**
     * Permite consultar si el usuario se encuentra registrado
     */
    public getUsuarioHojaVida(identificacion): Observable<any> {
        let ruta = [this.ApiUrl, "getUsuarioHojaVida"].join("/");        
        return this.http.post(ruta,identificacion);
    }

    /**
     * Permite validar la informacion para acceder a laa hoja de vida
     */
    public verificarUsuario(data): Observable<any> {
        let ruta = [this.ApiUrl, "verifyUsuario"].join("/");
        return this.http.post(ruta, data);
    }


    /**
     * Permite obtener los datos de la hoja de vida del usuario
     */
    public getHojaVida(data): Observable<any> {
        let ruta = [this.ApiUrl, "getHojaVida"].join("/");
        return this.http.post(ruta, data);
    }

    /**
     * Permite obtener los datos de la hoja de vida del usuario
     */
    public updateHojaVida(data): Observable<any> {
        let ruta = [this.ApiUrl, "updateHojaVida"].join("/");
        return this.http.post(ruta, data);
    }
}
