import {AsyncValidatorFn, AbstractControl} from '@angular/forms'

export class UsernameValidators{
    static CheckUsername(control:AbstractControl){
        console.log("username checked",control)
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
               let value=control.value;
               if(value=="Aditya"){
                 resolve({"UsernameValidator":{"msg":"Username exists"}})
               }
               return resolve(null);
            }, 5000);
        });
    }
}