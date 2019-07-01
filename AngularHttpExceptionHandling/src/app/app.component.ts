import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _posts:any
  ngOnInit(): void {
    this._postsService.GetPosts().subscribe(result=>{
        this._posts=result;
    });
  }
  constructor(private _postsService:PostsService) {
   
  }
  title = 'AngularHttpExceptionHandling';

}
