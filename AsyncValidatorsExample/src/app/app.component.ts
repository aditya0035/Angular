import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckUserName } from './CheckUserName';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AsyncValidatorsExample';
  form:FormGroup;
  constructor(){
    this.form=new FormGroup({
      "Username":new FormControl('',[Validators.required],[CheckUserName.validate]),
      "Password":new FormControl('',[Validators.required])
  })
  }
  FormSubmit(){
    console.log(this.form)
  }
}
