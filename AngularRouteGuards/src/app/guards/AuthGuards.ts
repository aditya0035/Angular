import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router'
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuards implements CanActivate{
    constructor(private router:Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
       let token=localStorage.getItem("token");
       if(token){
           return true;
       }
       else{
        this.router.navigate(["/"],{queryParams:{returnurl:state.url}});
        return false;
       }
    }
}