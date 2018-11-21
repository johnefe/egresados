import { GestionCeremoniaComponent } from './gestion-ceremonia/gestion-ceremonia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Ceremonia'
    },
    children: [
      {
        path: 'gestionar_ceremonia',
        component: GestionCeremoniaComponent,
        data: {
          title: 'ceremonia'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CeremoniaRoutingModule { }
