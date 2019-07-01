import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNgStyleDirective';
  isActive:boolean=true;
  ActiveDeactiveHandler=()=>{
    this.isActive=!this.isActive;
  }
}
