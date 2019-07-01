export class CheckUserName  {
    static validate(control: import("@angular/forms").AbstractControl):
     Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors> {
        console.log("validator hit")
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value=="Jack"){
                   return resolve({"Username":"Already Exists"} )
                }
                return resolve(null);
            },6000)
        })
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }
}
