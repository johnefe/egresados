
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { ValidacionFormularioService } from "../../../app-core/services/validacion-formularios/validacion-formulario.service";

import { InputComponent } from '../../../app-core/general-components/input/input.component';
import { MensajeService } from "../../../app-core/services/app-admin/mensaje/mensaje.service";
import { HojaVidaService } from "../../../app-core/services/hoja-vida/hoja-vida.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-persona",
  templateUrl: "./persona.component.html",
  styleUrls: ["./persona.component.css"]
})
export class PersonaComponent implements OnInit {
  @ViewChild("personaForm") currentForm: NgForm;
  form: FormGroup;
  formErrors: any;

  /**
   * Información de los parametros generales
   */
  paramGeneral: string;

  /**
   * Información de la persona que se va a registrar
   */
  persona: any = {
    tipo_documento: "",
    num_identificacion: "",
    fecha_expedicion: "",
    email: ["", [Validators.email]],
    ciudad_expedicion: "",
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    sexo_biologico: "",
    grupo_sanguineo: "",
    estado_civil: "",
    ciudad_nacimiento: "",
    fecha_nacimiento: "",
    ciudad_residencia: "",
    direccion: "",
    celular: "",
    clase_libreta: "",
    distrito: "",
    documento_hv: ""
  };

  /**
   * Lista de tipo de identificación
   */
  tipoIdentificacion: any;

  /**
   * Lista de grupo sanguineo
   */
  grupoSanguineo: any;

  /**
   * Lista estado civil
   */
  estadoCivil: any;

  /**
   * Clase libreta
   */
  claseLibreta: any;
  files: any;
  params: any;

  constructor(
    private formBuilder: FormBuilder,
    private validacionService: ValidacionFormularioService,
    private mensajeService: MensajeService,
    private hojaVidaService: HojaVidaService,
    private router: Router
  ) { }

  /**
  * Metodo inicial
  */
  ngOnInit() {
    var usuario = JSON.parse(localStorage.getItem('Usuario'))
    this.validacionService.createFormErrors(this.persona);
    this.formErrors = this.validacionService.formErrors;

    this.form = this.formBuilder.group(this.persona);
    this.hojaVidaService.getHojaVida({ id_hoja_de_vida: usuario }).subscribe(
      data => {
        //data = this.unirParamsGenerales(data);
        //this.form = this.formBuilder.group(data);
      },
      err => {
        console.log(err);
        this.mensajeService.enviarMensaje('Error', 'No se obtuvo la informacion del usuario', 'error');
      }
    );

    this.hojaVidaService.getParametros().subscribe(
      data => {
        this.tipoIdentificacion = data.filter(it => {
          return it.id_param_general_tipo == 2;
        });

        this.grupoSanguineo = data.filter(it => {
          return it.id_param_general_tipo == 1;
        });

        this.estadoCivil = data.filter(it => {
          return it.id_param_general_tipo == 8;
        });

        this.claseLibreta = data.filter(it => {
          return it.id_param_general_tipo == 28;
        });
      },
      err => {
        console.log(err);
        this.mensajeService.enviarMensaje('Error', 'No se obtuvieron los parametros generales', 'error');
      }
    );
  }

  /**
   * Metodo que valida el formulario
   */
  ngAfterViewChecked() {
    this.validacionService.validateFormGlobal(this.currentForm);
    //console.log(this.validacionService.formErrors);
    this.formErrors = this.validacionService.formErrors;

  }

  /**
   * Metodo que valida el formulario
   */
  guardar() {
    var persona = Object.assign({},this.form.value)
    persona.TalenHojaDeVidaParams = this.params
    this.hojaVidaService.updateHojaVida(persona).subscribe(
      data =>{
        this.mensajeService.enviarMensaje("Exíto","Datos actualizados correctamente","success");

      },
      err => {
        console.log(err);
        this.mensajeService.enviarMensaje('Error', 'No se actualizaron los datos de la hoja de vida', 'error');
      }
    )
  }

  /**
   * Metodo que permite regresar al mennu de principal de hoja de vida
   */
  regresar() {
    let link = ["/hoja_de_vida/principal"];
    this.router.navigate(link);
  }

  /**
   * Metdodo Permite  obetener los para metros generales de la hoja de via
   * @param data  Datos con los parametros generales de la Hoja de vida
   */
  unirParamsGenerales(data) {

    this.params = Object.assign([], data.TalenHojaDeVidaParams);

    data.tipo_documento = this.params.filter(it => {
      return it.GenerParamGeneral.id_param_general_tipo == 2;
    })[0].id_param_general


    data.grupo_sanguineo = this.params.filter(it => {
      return it.GenerParamGeneral.id_param_general_tipo == 1;
    })[0].id_param_general

    data.estado_civil = this.params.filter(it => {
      return it.GenerParamGeneral.id_param_general_tipo == 8;
    })[0].id_param_general

    data.clase_libreta = this.params.filter(it => {
      return it.GenerParamGeneral.id_param_general_tipo == 28;
    })[0].id_param_general

    data['email'] =  [data.email, [Validators.email]]

    delete data.GenerArchivo
    delete data.TalenHojaDeVidaParams

    return data;
  }
}
