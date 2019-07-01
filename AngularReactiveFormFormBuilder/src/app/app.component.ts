import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { fbind } from 'q';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularReactiveFormFormBuilder';
  private fb:FormBuilder=new FormBuilder();
  private userForm=this.fb.group({
    "username":this.fb.control(null),
    "password":this.fb.control(null)
  });
  UserFormSubmitHandler(){
    console.log(this.userForm)
  }
} 
