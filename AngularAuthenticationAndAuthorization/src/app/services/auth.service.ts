import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  AuthenticateUser(){
    return new Promise((resolve,reject)=>{resolve({token:"1212335hgsaasfasastafsaas"})});
  }
}
