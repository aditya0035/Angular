import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularReactiveFormGroup';
  addressForm:FormGroup=new FormGroup({
    contact:new FormGroup({
      "AddressLine1":new FormControl(null),
      "AddressLine2":new FormControl(null)
    })
  })
  FormSubmitHandler(){
    console.log(this.addressForm.get("contact"))
  }
}
