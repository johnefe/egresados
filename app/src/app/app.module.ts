import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, } from "@angular/common";
import { LocationStrategy, HashLocationStrategy, } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TooltipModule } from 'ngx-bootstrap';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views2/error/404.component';
import { P500Component } from './views2/error/500.component';
import { LoginComponent } from './views2/login/login.component';
import { RegisterComponent } from './views2/register/register.component';

const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ServicesModule } from './app-core/services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app-core/services/app-admin/seguridad/http-interceptors/auth-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConvocatoriasModule } from './views/convocatorias/convocatorias.module';
import { ValidacionFormularioService } from './app-core/services/validacion-formularios/validacion-formulario.service';
import { HojaVidaService } from './app-core/services/hoja-vida/hoja-vida.service';
import { NucleoFamiliarHvService } from './app-core/services/nucleo-familiar-hv/nucleo-familiar-hv.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CeremoniaModule } from './views/ceremonia/ceremonia.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    HttpClientModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ChartsModule,
    ConvocatoriasModule,
    CeremoniaModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ValidacionFormularioService,
    HojaVidaService,
    NucleoFamiliarHvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
