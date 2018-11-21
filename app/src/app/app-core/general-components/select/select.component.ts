import { FilterParamsPipe } from "./../../filters/filter-params.pipe";
import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
};

@Component({
    selector: "app-select",
    templateUrl: "./select.component.html",
    styleUrls: ["./select.component.scss"],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, FilterParamsPipe]
})
export class SelectComponent implements ControlValueAccessor {
    /**
     * titulo del input
     */
    @Input()
    titulo: string = "";

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
     * deshabilitar select
     */
    @Input()
    xdisabled: string = "false";

    /**
     * formulario de error
     */
    @Input()
    xformErrors: any;

    /**
     * Lista de datos que se van a mostrar en la interfaz
     */
    @Input()
    data: any;

    /**
     * Lista de datos que se van a mostrar en la interfaz
     */
    @Input()
    filt: any;

    /**
     * campo del valor
     */
    @Input()
    xval: any;

    /**
     * valor a mostrar en la lista
     */
    @Input()
    xopt: any;

    /**
     * verifica si el select is touched
     */
    isTouch: boolean = false;
    valSel: any;

    constructor() { }

    ngOnInit() { }

    changeInput(val: any) {
        this.isTouch = true;
        this.propagateChange(val);
    }

    //propagate changes into the custom form control
    propagateChange = (_: any) => { };

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value != '') {
            this.valSel = value            
            this.isTouch = true
        }    
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) { }

    touchClick(val: any) {
        this.propagateChange(val);
    }
}
