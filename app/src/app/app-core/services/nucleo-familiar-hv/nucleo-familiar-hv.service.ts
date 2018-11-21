import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ServiceBase } from "../service-base";
import config from "../app-admin/configuracion/config";

@Injectable({
    providedIn: 'root'
})
export class NucleoFamiliarHvService extends ServiceBase {

    constructor(protected http: HttpClient) {
        super(http);
        this.ApiUrl = [config.ApiUrl, config.petUrl].join("/");
    }

    /**
     * Permite obtener el nucleo familiar
     * @param {json}persona datos con la información de la persona para obtener el nucleo familiar
     * @returns datos del b¿nucleo familiar
     */
    public getNucleoFamiliar(persona): Observable<any> {
        let ruta = [this.ApiUrl, "getNucleoFamiliar"].join("/");
        return this.http.post(ruta, persona);
    }
}
