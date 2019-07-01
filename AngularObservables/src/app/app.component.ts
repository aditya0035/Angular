import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this._postsService.GetPosts().subscribe(response=>{console.log(response)});
  }
  constructor(private _postsService:PostsService){

  }
  title = 'AngularObservables';
}
