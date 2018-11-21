import { MensajeService } from './../../../app-core/services/app-admin/mensaje/mensaje.service';
import { Component, OnInit } from '@angular/core';
import { HojaVidaService } from '../../../app-core/services/hoja-vida/hoja-vida.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  identificacion: string;
  pass: string;
  isPassInput: boolean = false;
  isError: boolean = false;
  errorMessage: string;
  isBusqueda: boolean = false;
  usuario: string;

  constructor(private hojaVidaService: HojaVidaService, private mensajeService: MensajeService, private router: Router) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('Usuario')
    if (this.usuario) {
      let link = ["/hoja_de_vida/principal"];
      this.router.navigate(link);
    }
  }


  verificaIdentificacion() {
    let usu = { identificacion: this.identificacion }
    this.isError = false;
    this.isBusqueda = true;
    this.hojaVidaService.getUsuarioHojaVida(usu).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.mensajeService.enviarMensaje("Exíto", "Se ha enviado el password a su correo electronico", "success");
        this.isPassInput = true;
        this.isBusqueda = false;
      },
      err => {
        console.log(err.error);
        this.isError = true;
        this.errorMessage = 'No se encuentra registrado '
        this.isPassInput = true;
        this.isBusqueda = false;
      }
    );
  }

  entrar() {
    this.isError = false;
    this.isBusqueda = true;
    let usu = { identificacion: this.identificacion, token: this.pass }
    this.hojaVidaService.verificarUsuario(usu).subscribe(
      data => {
        data.fecha = Date.now();
        localStorage.setItem('Usuario', JSON.stringify(data));
        let link = ["/hoja_de_vida/principal"];
        this.router.navigate(link);
      },
      err => {
        console.log(err);
        this.errorMessage = "Password incorrecto"
        this.isError = true;
        this.isPassInput = false;
      });
  }
}
