import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  this.posts.GetPosts().subscribe(result=>{
    console.log(result);
  })  
  }
  title = 'AngularGlobalErrorHandling';
  constructor(private posts:PostsService) {
    
  }

}
