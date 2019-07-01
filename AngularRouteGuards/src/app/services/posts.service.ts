import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
@Injectable({
    providedIn:'root'
})
export class Posts{
    constructor(private httpClient:HttpClient){

    }
    GetPosts(){
       return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
    }
}