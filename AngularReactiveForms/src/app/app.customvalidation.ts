import {ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms'
export class StartWithCharacter{
    static StartWithA(control:AbstractControl):ValidationErrors{
        let value:string=control.value;
        if(value){
            if(!value.startsWith("A")){
                return {StartWithA:{"msg":"Field Value should start with A"}
            }
        }
    }
    return null;
}
}
