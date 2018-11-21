import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HojaDeVidaRoutingModule } from './hoja-de-vida-routing.module';
import { PersonaComponent } from './persona/persona.component';
import { NucleoFamiliarComponent } from './nucleo-familiar/nucleo-familiar.component';
import { FormacionAcademicaComponent } from './formacion-academica/formacion-academica.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);
import { ClickOutsideModule } from "ng-click-outside";
import { GeneralComponentsModule } from './../../app-core/general-components/general-components.module';

@NgModule({
  imports: [
    CommonModule,
    HojaDeVidaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralComponentsModule
  ],
  declarations: [
    PersonaComponent,
    NucleoFamiliarComponent,
    NucleoFamiliarComponent,
    FormacionAcademicaComponent,
    ExperienciaLaboralComponent,
    PrincipalComponent,
    /*InputComponent,
    SelectComponent,
    InputDateComponent,
    InputAcompleteComponent,
    InputFileComponent*/
  ],
})
export class HojaDeVidaModule { }
