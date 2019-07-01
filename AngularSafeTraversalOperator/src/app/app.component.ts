import { Component, OnInit } from '@angular/core';
import {PersonService} from './person.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  ngOnInit(): void {
    this._personService.GetPerson().then((result:any)=>{
      this._person=result.person;
    });
  }
  private _person:any;
  constructor(private _personService:PersonService) {
    
  }
  title = 'AngularSafeTraversalOperator';


}
