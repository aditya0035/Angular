import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEventBinding';
  ButtonClickHandler=(event)=>{
    console.log("Clicked me!",event)
  }
}
