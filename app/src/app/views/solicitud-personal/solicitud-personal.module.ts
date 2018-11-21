import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudPersonalRoutingModule } from './solicitud-personal-routing.module';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  imports: [
    CommonModule,
    SolicitudPersonalRoutingModule
  ],
  declarations: [SolicitudComponent, PersonalComponent]
})
export class SolicitudPersonalModule { }
