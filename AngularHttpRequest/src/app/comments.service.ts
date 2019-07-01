import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _httpClient:HttpClient) { 

  }
  GetComments(){
    return this._httpClient.get("https://jsonplaceholder.typicode.com/commentss");
  }
}
