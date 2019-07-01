import { Component } from '@angular/core';
import {FormGroup,FormControl, FormGroupName, Validators} from '@angular/forms'
import {UsernameValidators} from './app.usernamevalidator'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularReactiveFormWithAsyncValidators';
  userform:FormGroup;
  private _username:any;
  constructor() {
    this.userform=new FormGroup({
      "Username":new FormControl(null,[Validators.required],[UsernameValidators.CheckUsername]),
      "Password":new FormControl(null,null)
    });
    this._username=this.userform.get("Username");
  }
  UserFormSubmitHandler(){
    console.log(this.userform)
  }
}
