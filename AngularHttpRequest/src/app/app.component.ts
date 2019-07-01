import { Component, OnInit } from '@angular/core';
import {CommentsService} from './comments.service'
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _commentsService:CommentsService) {
  }
  private _comments:any
  ngOnInit(): void {
    this._commentsService.GetComments().subscribe(result=>{
      this._comments=result
    },(error:HttpErrorResponse)=>{
      if(error.status===404){
        alert("the resource not found")
      }
    });
  }
  title = 'AngularHttpRequest';
}
