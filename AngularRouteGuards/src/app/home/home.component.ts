import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthServie} from '../services/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private _authService:AuthServie) { }
  Login(){
    this._authService.AuthenticateUser().then((result:any)=>{
      localStorage.setItem("token",result.token)
      let returnUrl=this.route.snapshot.queryParamMap.get("returnurl");
      if(returnUrl){
        this.router.navigate([returnUrl]);
      }
    });
  }
  Logout(){
    let token=localStorage.getItem("token")
    if(token){
      localStorage.removeItem("token");
    }
  }
  ngOnInit() {
    // let returUrl:string=this.route.snapshot.queryParamMap.get("returnurl");
    // if(returUrl){
    //   this.router.navigate([returUrl]);
    // }
  }

}
