import { GeneralComponentsModule } from './../../app-core/general-components/general-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { CeremoniaRoutingModule } from './ceremonia-routing.module';
import { GestionCeremoniaComponent } from './gestion-ceremonia/gestion-ceremonia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CeremoniaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralComponentsModule,
    NgxPaginationModule,
    TooltipModule

  ],
  declarations: [
    GestionCeremoniaComponent,

  ]
})
export class CeremoniaModule { }
