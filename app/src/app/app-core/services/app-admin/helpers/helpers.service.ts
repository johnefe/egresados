import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {

    padnum(num, size){
        let s= num+"";
        while(s.length< size){
            s="0"+s
        }
        return s;
    }

    formatearFecha(fechaparam, hora= 'N') {
        if(fechaparam){
            let fecha= new Date(fechaparam);
            var cadena=""
            if(hora=="S"){
                let mes= this.padnum(fecha.getMonth()+1,2);
                let dia= this.padnum(fecha.getDate(),2);
                let hora_formateada=this.padnum(fecha.getHours(),2);
                let minuto=this.padnum(fecha.getMinutes(),2);
                cadena=dia+"/"+mes+"/"+ fecha.getFullYear()+" "+hora_formateada+":"+minuto; 
            }
            else{
                let mes= this.padnum(fecha.getMonth()+1,2);
                let dia= this.padnum(fecha.getDate(),2);
                cadena=dia+"/"+mes+"/"+ fecha.getFullYear();
            }
            return cadena;
        }
        else{
            return "";
        }
    }

    buscarObjetoByKey(arreglo, identificador, valor) {
        let objetoEncontrado = null;
        arreglo.forEach(item => {
            if (item[identificador] === valor) {
                objetoEncontrado = item;
                return;
            }
        });
        return objetoEncontrado;
    }

}
