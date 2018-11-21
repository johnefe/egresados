import {
    Component,
    Input,
    forwardRef,
    EventEmitter,
    Output,
    OnInit
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import config from "../../services/app-admin/configuracion/config";
import { ServiceBase } from "../../services/service-base";
import { Observable } from "rxjs";
import { stringify } from "@angular/core/src/util";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputAcompleteComponent),
    multi: true
};

@Component({
    selector: "app-input-acomplete",
    templateUrl: "./input-acomplete.component.html",
    styleUrls: ["./input-acomplete.component.scss"],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputAcompleteComponent extends ServiceBase
    implements ControlValueAccessor, OnInit {
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

    /**
     * mensaje de error del pattern
     */
    @Input()
    mPattern: string = "";

    /**
     * Lista de datos
     */
    @Input()
    items: any = [];

    /**
     * Lista de datos
     */
    @Input()
    ruta: string = "";

    /**
     * Lista de datos
     */
    //@Input()
    inputVal: string = "";

    @Input()
    listTitulo: string = "";

    @Input()
    listSubTitulo: string = "";

    itemSelect: any = null;

    /**
     * subtuilos que se mostraran
     */
    subtitulos: any = [];

    /**
     * isClick
     */
    isClick: any = false;

    /**
     * isListItem
     */
    isListItem: boolean = false;

    /**
     * isCorrect
     */
    isCorrect: boolean = false;

    constructor(protected http: HttpClient) {
        super(http);
        this.ApiUrl = [config.ApiUrl, config.petUrl].join("/");
    }

    ngOnInit() {
        this.subtitulos = this.listSubTitulo.split(",");
    }

    ln = 0;
    changeInput(val: any) {

        if (this.ln != val.length) {
            this.inputVal = val
        }

        if (val.length > 1 && this.ln != val.length) {
            this.isTouch = true;
            this.itemSelect = null;
            this.isListItem = true;
            let value = { value: val };
            this.ln = val.length;
            this.getValues(value)
        }
    }

    onClick(val: any) {
        this.isClick = true;
        this.isListItem = true;

        if (val != '') {
            let value = { value: val };
            this.getValues(value)
        }
    }

    //propagate changes into the custom form control
    propagateChange = (_: any) => { };

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value) {
            this.inputVal = value.ciudad
            this.isTouch = true
            this.itemSelect = true
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) { }

    selectItem(item) {
        this.itemSelect = item;
        this.isListItem = false;
        this.inputVal = item.ciudad
        this.propagateChange(item);
    }

    outside() {
        if (!this.isClick) {
            this.isListItem = false;
        } else {
            this.isClick = false;
        }
    }

    /**
     * Permite obtener los parametros generales necesarios para la hoja de vida
     */
    public getService(value): Observable<any> {
        let ruta = [this.ApiUrl, this.ruta].join("/");
        return this.http.post(ruta, value);
    }


    getValues(value) {
        this.getService(value).subscribe(            
            data => {
                if (data.length > 0) {
                    this.items = data;
                } else {
                    this.items = [];
                }
            },
            err => {
                this.items = [];
                console.log(err);
            }
        );

    }
}
