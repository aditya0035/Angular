import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {StartWithCharacter} from './app.customvalidation'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularReactiveForms';
 private UserForm:FormGroup=new FormGroup(
   {"UserName":new FormControl(null,[Validators.required,StartWithCharacter.StartWithA]),"Password":new FormControl(null,[Validators.minLength(10)])});
   UserFormHandler(){
     console.log(this.UserForm)
   }
  private _password=this.UserForm.get('Password');
  private _username=this.UserForm.get("UserName")
 
}
