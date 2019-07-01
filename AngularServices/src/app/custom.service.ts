import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor() { }
  GetUsers(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            return resolve(["Aditya","Ashish","Anuj"]);
        }, 4000);
    }); 
}
}
