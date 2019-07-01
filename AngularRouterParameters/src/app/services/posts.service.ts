import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseurl:string="https://jsonplaceholder.typicode.com/"
  constructor(private _httpClient:HttpClient) { }
  GetPosts(){
   return this._httpClient.get(this.baseurl.concat("posts"));
  }
  GetPost(id:number){
    return this._httpClient.get(this.baseurl.concat("posts/",String(id)))
  }
}
