import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private _posts:any;
  constructor(private _postsService:PostsService) { }

  ngOnInit() {
    this._postsService.GetPosts().subscribe(result=>{
      this._posts=result;
    });
  }

}
