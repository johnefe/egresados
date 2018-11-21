import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ValidacionFormularioService } from '../../../app-core/services/validacion-formularios/validacion-formulario.service';
import { BsModalRef, BsModalService, PageChangedEvent } from "ngx-bootstrap";

@Component({
  selector: 'app-gestion-ceremonia',
  templateUrl: './gestion-ceremonia.component.html',
  styleUrls: ['./gestion-ceremonia.component.scss']
})
export class GestionCeremoniaComponent implements OnInit {
  form: FormGroup;
  modalRef: BsModalRef;
  @ViewChild('ceremoniaForm')
  currentForm: NgForm;
  data: any = {
    fecha_ceremonia: '',
    proposicion_pregrado: '',
    proposicion_posgrado: '',
    proposicion_adicional: ''
  };

  decanos: any = {
    nombres: '',
    facultad: ''
  };
  formErrors: any;
  estadoCivil: {}[];
  constructor(
    private formBuilder: FormBuilder,
    private validacionService: ValidacionFormularioService,
    private serviceModal: BsModalService
  ) {}

  ngOnInit() {
    this.formErrors = this.validacionService.createFormErrors(this.data);
    this.form = this.formBuilder.group(this.data);
    this.data.fecha_ceremonia = '24/12/2018';
    this.data.proposicion_pregrado = '21083';
    this.data.proposicion_posgrado = '21084';
    this.data.proposicion_adicional = '21085';
    this.decanos.nombres = 'Decano xxxxx';
    this.decanos.facultad = 'facultad xxxxxx';
    /*this.estadoCivil = [
      { id: 12, estado: 'Soltero' },
      { id: 13, estado: 'Casado' }
    ];*/
  }

  /**
   * Metodo que valida el formulario
   */
  ngAfterViewChecked() {
    this.validacionService.validateFormGlobal(this.currentForm);
    this.formErrors = this.validacionService.formErrors;
  }

  guardar() {
    console.log(this.form.value);
  }

  detalles(template: TemplateRef<any>) {

    this.modalRef = this.serviceModal.show(template, Object.assign({}, { class: 'modal-md' }));
  }
}
