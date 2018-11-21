import { CeremoniaModule } from './views/ceremonia/ceremonia.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views2/error/404.component';
import { P500Component } from './views2/error/500.component';
import { LoginComponent } from './views2/login/login.component';
import { RegisterComponent } from './views2/register/register.component';
import { TalenLoginGuardService } from './app-core/services/app-admin/seguridad/talen-login-guard/talen-login-guard.service';

export const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'loginPrueba',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    //canActivate: [LoginGuardService, ],
    children: [
      {
        path: '',
        loadChildren: './views/login/login.module#LoginModule',
      },
      {
        path: 'hoja_de_vida',
        loadChildren: './views/hoja-de-vida/hoja-de-vida.module#HojaDeVidaModule',
        //canActivate: [TalenLoginGuardService, ],
      },
      {
        path: 'solicitud',
        loadChildren: './views/solicitud-personal/solicitud-personal.module#SolicitudPersonalModule'
      },
      {
        path: 'ceremonia',
        loadChildren: './views/ceremonia/ceremonia.module#CeremoniaModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
