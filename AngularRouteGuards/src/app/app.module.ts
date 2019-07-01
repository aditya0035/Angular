import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { AuthGuards } from './guards/AuthGuards';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"",component:HomeComponent
      },
      {
        path:"posts",component:PostsComponent,canActivate:[AuthGuards]
      },
      {
        path:"comments",component:CommentsComponent,canActivate:[AuthGuards]
      }
    ])
  ],
  providers: [AuthGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }
