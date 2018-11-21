import { MensajeService } from './../../../app-core/services/app-admin/mensaje/mensaje.service';
import { NucleoFamiliarHvService } from './../../../app-core/services/nucleo-familiar-hv/nucleo-familiar-hv.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ValidacionFormularioService } from '../../../app-core/services/validacion-formularios/validacion-formulario.service';

@Component({
  selector: 'app-nucleo-familiar',
  templateUrl: './nucleo-familiar.component.html',
  styleUrls: ['./nucleo-familiar.component.scss']
})
export class NucleoFamiliarComponent implements OnInit {
  @ViewChild("familiaForm") currentForm: NgForm;


  /**
   * Usuario que se encuentra logeado
   */
  usuario: any;

  /**
   * Lista de familiares
   */
  nucleoFam: any;

  /**
   * Formulario asociado al coponente
   */
  form: FormGroup;

  /**
   * Lista de Errores
   */
  formErrors: any;


  /**
   * Información de la persona que se va a registrar
   */
  familiar: any = {
    id_nucleo_familiar_hv: '',
    id_hoja_de_vida: '',
    num_identificacion: '',
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    sexo_biologico: '',
    email: '',
    celular: '',
    direccion: '',
    fec_expedicion_documento: '',
    cod_localizacion: '',
    id_tipo_pariente: '',
  };
  tipoPariente: any[];

  constructor(
    private formBuilder: FormBuilder,
    private validacionService: ValidacionFormularioService,
    private nucleoFamiliarHvService: NucleoFamiliarHvService,
    private mensajeService: MensajeService) { }

  /**
   * Metodo inicial
   */
  ngOnInit() {
    this.tipoPariente = []
    this.usuario = localStorage.getItem('Usuario')
    this.usuario = JSON.parse(this.usuario).data
    var data = { id_hoja_de_vida: this.usuario.id_hoja_de_vida }
    this.form = this.formBuilder.group(this.familiar);

    this.nucleoFamiliarHvService.getNucleoFamiliar(data).subscribe(
      data => {
        data = this.nucleoFam
        console.log(data)
      },
      err => {
        console.log(err);
        this.mensajeService.enviarMensaje('Error', 'No se obtuvo los datos de nucleo familiar', 'error');
      }
    );
  }


  /**
   * Metodo que valida el formulario
   */
  ngAfterViewChecked() {
    this.validacionService.validateFormGlobal(this.currentForm);
    this.formErrors = this.validacionService.formErrors;
  }

  /**
   *Metodo que permite crear o actualizar una persona
   */
  guardar() {

  }

  /**
   *Metodo que permite salir al menu principal de hoja de vida
   */
  regresar() {

  }

  /**
   * Metodo que permite regresar a la lista de familiares
   */
  cancelar() {

  }

}
