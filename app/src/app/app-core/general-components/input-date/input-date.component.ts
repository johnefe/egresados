import { Component, Input, forwardRef, ViewChild, ElementRef, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { DatePipe } from "@angular/common";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputDateComponent),
    multi: true
};

@Component({
    selector: "app-input-date",
    templateUrl: "./input-date.component.html",
    styleUrls: ["./input-date.component.scss"],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputDateComponent implements ControlValueAccessor, OnInit {
    /**
     * verifica si el select is touched
     */
    isTouch: boolean = false;

    /**
     * tipo del input ej: text, number, date
     */
    @Input()
    xtype: string = "text";

    /**
     * titulo del input
     */
    @Input()
    titulo: string = "";

    /**
     * placeholder
     */
    @Input()
    xplaceholder: string;

    /**
     * (true) muestra (*) si el campo es obligatorio
     */
    @Input()
    xrequired: string = "false";

    /**
     * texto del tooltip
     */
    @Input()
    xtooltip: string;

    /**
     * formulario de error
     */
    @Input()
    xformErrors: any;

    /**
   * deshabilitar input
     */
    @Input()
    xdisabled: string = "false";


    @Input()
    mPattern: string = "";

    locale = 'es';
    inputVal: any;

    constructor(private localeService: BsLocaleService,private datePipe: DatePipe) {

    }

    ngOnInit() {
        this.localeService.use(this.locale)
    }

    changeInput(val: any) {
        this.propagateChange(val);
    }

    //propagate changes into the custom form control
    propagateChange = (_: any) => { };

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value) {           
            value = this.datePipe.transform(value, 'dd/MM/yyyy') 
            this.inputVal = value
            this.isTouch = true
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) { }
}
