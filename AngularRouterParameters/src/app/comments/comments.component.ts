import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../services/comments.service'
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  private _comments:any;
  constructor(private _commentsService:CommentsService) { }

  ngOnInit() {
    this._commentsService.GetComments().subscribe(result=>{
      this._comments=result;
    });
  }

}
