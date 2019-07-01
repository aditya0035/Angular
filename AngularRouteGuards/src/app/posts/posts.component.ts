import { Component, OnInit } from '@angular/core';
import {Posts} from '../services/posts.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _post:Posts) { }
  private _posts:any;
  ngOnInit() {
    this._post.GetPosts().subscribe(result=>{
      this._posts=result;
    });
  }

}
