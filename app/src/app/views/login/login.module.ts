import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FilterParamsPipe } from '../../app-core/filters/filter-params.pipe';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);
import { ClickOutsideModule } from "ng-click-outside";
import { GeneralComponentsModule } from '../../app-core/general-components/general-components.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    TooltipModule,
    FormsModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    ClickOutsideModule,
    GeneralComponentsModule
  ],
  declarations: [
    LoginComponent,
    RegistroComponent,
    FilterParamsPipe,
  ]
})
export class LoginModule {}
