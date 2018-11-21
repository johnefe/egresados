import { FilterParamsPipe } from "./../../../app-core/filters/filter-params.pipe";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, NgForm, FormGroup, Validators } from "@angular/forms";
import { ValidacionFormularioService } from "../../../app-core/services/validacion-formularios/validacion-formulario.service";
import { HojaVidaService } from "./../../../app-core/services/hoja-vida/hoja-vida.service";
import { MensajeService } from "../../../app-core/services/app-admin/mensaje/mensaje.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.scss"]
})
export class RegistroComponent implements OnInit {
  @ViewChild("registerForm") currentForm: NgForm;
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

  constructor(
    private formBuilder: FormBuilder,
    private validacionService: ValidacionFormularioService,
    private mensajeService: MensajeService,
    private hojaVidaService: HojaVidaService,
    private router: Router
  ) {}

  /**
   * Metodo Inicial del registro component
   */
  ngOnInit() {
    this.formErrors = this.persona;
    this.validacionService.createFormErrors(this.persona);
    this.form = this.formBuilder.group(this.persona);

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
        this.mensajeService.enviarMensaje("Registro exitoso","Acceda con su número de indentificación","success");
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

  imageChange(event) {
    this.form.value.fileHV = event.target.files[0].name || event.srcElement.files[0].name;
    this.files = event.target.files[0] || event.srcElement.files[0];
  }

  /**
   * Metodo que permite guardar los datos de la persona que se va  a registrar
   */
  guardar() {
    this.hojaVidaService.crearHojaVida(this.form.value).subscribe(
      data => {
        this.mensajeService.enviarMensaje("Exíto","Se registro con exíto","success");

        let link = ["/"];
        this.router.navigate(link);
      },
      err => {
        console.log(JSON.stringify(err));
        let mensajeError = "Error al registrar su hoja de vida";
        if (err.error.message == "u-r") {
          mensajeError = "Ya existe una hoja de vida asociada a su número de identificación";
        }
        this.mensajeService.enviarMensaje("Error", mensajeError, "error");
      }
    );
  }
}
