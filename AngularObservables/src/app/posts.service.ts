import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map,retry, delay, retryWhen, take} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _httpClient:HttpClient) { }
  GetPosts(){
    return this._httpClient.get("https://jsonplaceholder.typicode.com/posts").pipe(retryWhen(errors => errors.pipe(delay(1000),take(10))),map(result=>result))
  }
}
