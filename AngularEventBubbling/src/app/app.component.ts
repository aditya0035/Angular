import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEventBubbling';
  ButtonClickHandler(event){
    console.log("Button Clicked Event",event)
  }
  DivClickHandler(){
    console.log("Div Clicked Event",event)
  }
}
