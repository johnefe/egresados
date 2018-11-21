import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Solicitud personal'
  },
  children: [
    {
      path: 'solicitud',
      component: SolicitudComponent,
      data: {
        title: 'Solicitud'
      }
    },
    {
      path: 'personal',
      component: PersonalComponent,
      data: {
        title: 'personal'
      }
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudPersonalRoutingModule { }
