import { Component, OnInit } from '@angular/core';
import {UserService} from './services/user.service'
import {CustomService} from './custom.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _users:string[]
  
  public get Users() : string[] {
    return this._users;
  }
  
  constructor(private _userService:UserService,private _customService:CustomService)
  {

  }
  ngOnInit(): void {
   this._userService.GetUsers().then(result=>{
    this._users=(result as string[])
   });
   this._customService.GetUsers().then(result=>{
    console.log(result);
   });
  }
  title = 'AngularServices';
}
