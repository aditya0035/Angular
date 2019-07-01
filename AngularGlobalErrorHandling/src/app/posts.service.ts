import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map, catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _httpClient:HttpClient) { }

  GetPosts(){
   return  this._httpClient.get("https://jsonplaceholder.typicode.com/albumss").pipe(
      map(result=>result),catchError((error)=>{
        return throwError("something wrong occured");
      })
    )
  }

}
