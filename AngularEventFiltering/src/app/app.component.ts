import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEventFiltering';
  // KeyupHandler=(event)=>{
  //   if(event.keyCode==13){
  //     console.log("Eneter Pressed!")
  //   }
  // }
  SubmitHanlder(event){
    console.log(event)
  }
}
