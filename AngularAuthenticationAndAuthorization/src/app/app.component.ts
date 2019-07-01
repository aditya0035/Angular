import { Component } from '@angular/core';
import {AuthService} from './services/auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _AuthService:AuthService) {
  }

  title = 'AngularAuthenticationAndAuthorization';
  Login(){
    this._AuthService.AuthenticateUser().then((result:any)=>{
      console.log(result.token)
      localStorage.setItem("token",result.token);
    });
  }
  Logout(){
      let token=localStorage.getItem("token");
      console.log(token);
      if(token){
        localStorage.removeItem("token");
      }
  }
}
