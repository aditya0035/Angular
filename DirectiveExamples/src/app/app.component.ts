import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveExamples';
  toggle:boolean;
  marks=[70,80,60,90]
  selectedValue=-1
  constructor(){
    this.toggle=true
  }
  ShowHide(){
    this.toggle=!this.toggle;
  }
  DDLColorChange(value){
    this.selectedValue=value;
  }
}
