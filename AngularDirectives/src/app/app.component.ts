import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _friends:string[]=["Aditya","Ashish","Anuj"]
  
  public get  Friends() : string[] {
    return this._friends
  }
 
  title = 'AngularDirectives';
}
