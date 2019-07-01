import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _httpClient:HttpClient) { }
  GetPosts(){
    return this._httpClient.get("https://jsonplaceholder.typicode.com/posts")
    .pipe(map(result=>{console.log(result);return result}),catchError(error => {
      return throwError('Something went wrong ;)');
    }));
  };

}
