import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service'
import { ActivatedRoute, Router } from '@angular/router';
import {combineLatest} from 'rxjs'
import {map,switchMap} from 'rxjs/operators'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private _post:any;
  constructor(private _postsService:PostsService,private route:ActivatedRoute,private router:Router) { }
  BackHandler(){
      this.router.navigate(["/posts"])
      // this.router.navigate(["/posts",{queryParams:{page:1}}])
  }
  ngOnInit() {
    // this.route.queryParamMap.subscribe(qmap=>{
    //   console.log(qmap.get("title"));
    // });

    // combineLatest([this.route.queryParamMap,this.route.paramMap]).subscribe((combined)=>{
    //   let id:number=(<unknown>combined[1].get("id")) as number;
    //     if(id){
    //       this._postsService.GetPost(id).subscribe(response=>{
    //         this._post=response;
    //       });
    //     }
    // });
    combineLatest([this.route.queryParamMap,this.route.paramMap]).pipe(switchMap(combined=>{
      let id:number=(<unknown>combined[1].get("id")) as number;
         return this._postsService.GetPost(id);
    })).subscribe(result=>{
      this._post=result;
    });
    
    // this.route.paramMap.subscribe(result=>{
    //   let id:number=(<unknown>result.get("id")) as number;
    //   if(id){
    //     this._postsService.GetPost(id).subscribe(response=>{
    //       this._post=response;
    //     })
    //   }
    // }
    // );
    //this._postsService.GetPost(){}
  }

}
