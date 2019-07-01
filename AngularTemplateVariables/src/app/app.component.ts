import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTemplateVariables';
  EmailSubmitHandler=(event,emailInput)=>{
    console.log(event)
    console.log(emailInput.value)
  }
}
