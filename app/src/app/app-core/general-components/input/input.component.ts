import { Component, Input, forwardRef, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputComponent implements ControlValueAccessor, OnInit {


  /**
   * verifica si el select is touched
   */
  isTouch: boolean = false;

  /**
   * tipo del input ej: text, number, date
   */
  @Input()
  xtype: string = 'text';

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
  xrequired: string = 'false';

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
  xdisabled: string = 'false'

  inputVal: string;

  @Input() mPattern: string = '';

  constructor() { }

  ngOnInit() {
  }

  ln = 0;
  changeInput(val: any) {
    this.isTouch = true
    if (this.ln != val.length || val.length == 0) {
      this.propagateChange(val);
    }
  }


  //propagate changes into the custom form control
  propagateChange = (_: any) => { };

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value) {
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

  touchClick(val: any) {
    this.isTouch = true
    this.propagateChange(val);
  }
}