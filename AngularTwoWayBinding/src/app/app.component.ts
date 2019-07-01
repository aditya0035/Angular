import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTwoWayBinding';
  defaultEmail:string="aditya.saraswat@gmail.com"
  EmailHandler=(event)=>{
    this.defaultEmail=event.srcElement.value;
  }
}
