import { NumberOnlyDirective } from "./soloNumerosDirective";
import { NgModule } from "@angular/core";
import { UppercaseDirective } from "./uppercaseDirective";

@NgModule({
    
    declarations: [
         NumberOnlyDirective,
         UppercaseDirective
    ],
    exports: [
        NumberOnlyDirective,
        UppercaseDirective
    ]
})
  
export class DirectiveModule {}