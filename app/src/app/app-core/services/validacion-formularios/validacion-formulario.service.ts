import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { conditions } from './form-validators';

@Injectable({
    providedIn: "root"
})
export class ValidacionFormularioService {
    private form: NgForm;
    public formErrors: any = {};

    constructor() { }

    public validateFormGlobal(currentForm: NgForm) {
        this.form = currentForm;
        if (this.form) {
            this.form.valueChanges.subscribe(() => {
                this.onValueChanged()
            });
        }
    }



    private onValueChanged() {
        const form = this.form.form;
        for (const field in this.formErrors) {
            this.formErrors[field][0] = "";
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.formErrors[field][1];
                for (const key in control.errors) {
                    console.log(key);
                    this.formErrors[field][0] += messages[key] + "";
                }
            }
        }
    }


    public createFormErrors(form) {
        var formRes = {}
        for (var x in form) {
            formRes[x] = ['', conditions]
        }
        this.formErrors = formRes

        return this.formErrors ;
    }
}
