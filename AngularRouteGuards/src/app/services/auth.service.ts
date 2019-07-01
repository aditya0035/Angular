import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
@Injectable({
    providedIn:'root'
})
export class AuthServie{
    AuthenticateUser(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve({"token":"hsajwqksplpojajasjasausa"});
            }, 4000);
        });
    }
}