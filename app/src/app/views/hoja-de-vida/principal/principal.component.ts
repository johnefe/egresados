import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})

export class PrincipalComponent implements OnInit {
  usuario: any;
  nombre: string;

  constructor( private router: Router) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('Usuario')
    this.usuario = JSON.parse(this.usuario).data

    console.log(this.usuario)
    this.nombre = this.usuario.primer_nombre + ' ' + this.usuario.segundo_nombre + ' ' + this.usuario.primer_apellido + ' ' + this.usuario.segundo_apellido
  }

  cerrarSesion(){
    localStorage.clear();
    let link = ["/"];
    this.router.navigate(link);
  }
}
