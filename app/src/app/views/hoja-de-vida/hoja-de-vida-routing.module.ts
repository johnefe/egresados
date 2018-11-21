import { TalenLoginGuardService } from './../../app-core/services/app-admin/seguridad/talen-login-guard/talen-login-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { NucleoFamiliarComponent } from './nucleo-familiar/nucleo-familiar.component';
import { FormacionAcademicaComponent } from './formacion-academica/formacion-academica.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Hoja de vida'
    },
    children: [
      {
        path: 'principal',
        component: PrincipalComponent,
        data: {
          title: 'Persona'
        }
      },
      {
        path: 'persona',
        component: PersonaComponent,
        data: {
          title: 'Persona'
        }
      },
      {
        path: 'nucleo_familiar',
        component: NucleoFamiliarComponent,
        data: {
          title: 'Nucleo Familiar'
        }
      },
      {
        path: 'formacion_academica',
        component: FormacionAcademicaComponent,
        data: {
          title: 'Formación académica'
        }
      },
      {
        path: 'experiencia_laboral',
        component: ExperienciaLaboralComponent,
        data: {
          title: 'Experiencia laboral'
        }
      },
      {
        path: 'principal',
        component: PrincipalComponent,
        data: {
          title: 'Principal hoja de vida'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HojaDeVidaRoutingModule {}
