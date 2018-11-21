import { Injectable } from '@angular/core';

import swal from 'sweetalert2';

@Injectable()
export class MensajeService {

  /**
   * Mensaje general de los mensajes de error
   */
  darMensajeErrorServidor() {
    return 'Ha ocurrido un error inesperado, por favor intente nuevamente o comuniquese con el administrador';
  }

  /**
   * Obtener el tipo y el titulo del mensaje para sweetalert2
   * @param pTipo tipo del mensaje 
   */
  darTiposMensaje(pTipo) {

    let titulo = 'Error';
    let tipo = 'error';

    if (pTipo != null && pTipo != '') {
      let miTipo = pTipo.toLowerCase();
      if (miTipo == 's' || miTipo == 'success') {
        titulo = 'Éxito';
        tipo = 'success';
      } else if (miTipo == 'w' || miTipo == 'warning') {
        titulo = 'Advertencia';
        tipo = 'warning';
      } else if (miTipo == 'e' || miTipo == 'error') {
        titulo = 'Error';
        tipo = 'error';
      } else if (miTipo == 'i' || miTipo == 'info') {
        titulo = 'Información';
        tipo = 'info';
      } else if (miTipo == 'q' || miTipo == 'question') {
        titulo = 'Pregunta';
        tipo = 'question';
      }
    }

    let mensaje = {
      titulo: titulo,
      tipo: tipo
    }

    return mensaje;
  }


  /**
   * Metodo que genera un preloader de sweetalert2
   * @param title Titulo del preloader se establece como procesando por defecto
   * @param allowOutsideClick 
   */
  procesando(title = 'Procesando', allowOutsideClick = false) {
    swal({
      title: title,
      html: 'Por favor espere un momento mientras procesamos su solicitud.',
      //type: type,
      allowOutsideClick: allowOutsideClick,
      onOpen: () => {
        swal.showLoading()
      }
    })
  }

  cerrarMensaje() {
    swal.close();
  }


  /**
   * Metodo general de envio de mensajes
   * @param pTitulo Titulo del alert
   * @param pText Cuerpo del alert
   * @param pTipo Tipo de alert
   * @param allowOutsideClick Si desea que se cierre haciendo clic en cuaquier lado de la pantalla
   * @param time tiempo de retardo en mostrar el mensaje
   */
  enviarMensaje(pTitulo, pText, pTipo, allowOutsideClick = false, time = 250) {
    let rTipoMensaje = <any>this.darTiposMensaje(pTipo);
    let htmlText:string =`
        <div style='text-align: center;'>`+ pText +` </div>
    `;
    setTimeout(() => {
      swal({
        title: pTitulo != null && pTitulo != '' ? pTitulo : rTipoMensaje.titulo,
        html: htmlText,
        type: rTipoMensaje.tipo,
        allowOutsideClick: allowOutsideClick,
        // animation: false,
        // customClass: 'animated rollIn'
      })
    }, time);
  }

  enviarMensajeFuncion(pTitulo, pText, pTipo,funcionEvento,allowOutsideClick = false, time = 250, ) {
    let rTipoMensaje = <any>this.darTiposMensaje(pTipo);
    setTimeout(() => {
      swal({
        title: pTitulo != null && pTitulo != '' ? pTitulo : rTipoMensaje.titulo,
        html: pText,
        type: rTipoMensaje.tipo,
        allowOutsideClick: allowOutsideClick,
        // animation: false,
        // customClass: 'animated rollIn'
      }).then(function(){
        funcionEvento();
      })
    }, time);
  }


  /**
   * Metodo que renderiza mensajes de error enviados desde el servidor
   * @param error JSON en formato { 'error': 'Mi error' }
   * @param time tiempo de retardo en mostrar el mensaje
   */
  mensajeErrorServidor(error, time = 250) {

    let titulo = 'Error';
    let message = this.darMensajeErrorServidor();

    if (error != null && error.error != null) {
      let errorValor = error.error;
      if (errorValor.titulo != null && errorValor.titulo != '') {
        titulo = errorValor.titulo;
      }

      if (errorValor.error != null && errorValor.error != '') {
        message = errorValor.error
      }
    }

    setTimeout(() => {
      swal(titulo, message, 'error');
    }, time);
  }


  /**
   * Metodo que renderiza mensajes enviados desde el servidor que no sean errores
   * @param data se recibe un JSON { msj:{titulo:'Mi titulo', mensaje:'Mi mensaje'} }
   * @param pTipo se recibe el tipo de alert
   * @param time tiempo de retardo en mostrar el mensaje
   */
  mensajeServidor(data, pTipo, time = 250) {

    let titulo = '';
    let message = '';

    let tipoMensaje = <any>this.darTiposMensaje(pTipo);

    if (data != null && data.msj != null) {
      let dataMensaje = data.msj;
      if (dataMensaje.titulo != null && dataMensaje.titulo != '') {
        titulo = dataMensaje.titulo;
      }

      if (dataMensaje.mensaje != null && dataMensaje.mensaje != '') {
        message = dataMensaje.mensaje
      }
    }

    setTimeout(() => {
      swal({
        title: titulo,
        html: message,
        type: tipoMensaje.tipo,
      })
    }, time);
  }

}
