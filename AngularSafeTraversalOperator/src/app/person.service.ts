import {Injectable} from '@angular/core'
@Injectable({
    providedIn:'root'
})
export class PersonService{
    /**
     *
     */
    constructor() {
        
    }
    GetPerson(){
       return new Promise((resolve,error)=>{
         setTimeout(()=>{
            return resolve({person:{"Fname":"Aditya","Lname":"Saraswat"}})
           },5000)
       }); 
    }
}