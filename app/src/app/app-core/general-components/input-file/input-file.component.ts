import {Component, Input,forwardRef, OnInit, } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFileComponent),
    multi: true
};

@Component({
    selector: "app-input-file",
    templateUrl: "./input-file.component.html",
    styleUrls: ["./input-file.component.scss"],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputFileComponent implements ControlValueAccessor, OnInit {
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
    xaccept:string = '.jpg'
    
    /**
     * titulo del input
     */
    @Input()
    input_title: string;


    i_title: string ='Subir archivo'

    /**
     * valor del titulo
     */
    valFile: { 'nombre': any; 'file': any; };

    constructor() {}

    ngOnInit() {
        if(!this.input_title){
            this.input_title = this.i_title;
        }else{
            this.i_title = this.input_title;
        }
    }

    //propagate changes into the custom form control
    propagateChange = (_: any) => {};

    //From ControlValueAccessor interface
    writeValue(value: any) {}

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {}

    touchClick(val: any) {
        this.propagateChange(val);
    }

    imageChange(event) { 
        this.valFile = {
            'nombre': event.target.files[0].name || event.srcElement.files[0].name,
            'file': event.target.files[0] || event.srcElement.files[0]
        }
        this.input_title = this.valFile.nombre;
        this.propagateChange(this.valFile);
    }

    clear(){
        this.valFile = null;
        this.input_title = this.i_title ;
        this.propagateChange(this.valFile);
    }
}
