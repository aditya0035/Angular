import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseurl:string="https://jsonplaceholder.typicode.com/"
  constructor(private _httpClient:HttpClient) { }
  GetComments(){
    return this._httpClient.get(this.baseurl.concat("comments"));
  }
}
