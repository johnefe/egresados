import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { GeneralComponentsRoutingModule } from './general-components-routing.module';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputFileComponent } from './input-file/input-file.component';
import { InputAcompleteComponent } from './input-acomplete/input-acomplete.component';

import { TooltipModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
    imports: [
        CommonModule,
        GeneralComponentsRoutingModule,
        TooltipModule,
        BsDatepickerModule
    ],
    declarations: [
        InputComponent,
        SelectComponent,
        InputDateComponent,
        InputAcompleteComponent,
        InputFileComponent
    ],
    exports: [
        InputComponent,
        SelectComponent,
        InputDateComponent,
        InputAcompleteComponent,
        InputFileComponent
    ],
    providers:[
        DatePipe
    ]
})
export class GeneralComponentsModule { }

