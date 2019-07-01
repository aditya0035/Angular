import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from '@angular/router'
import {router} from './app.router'
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    CommentsComponent,
    NavigationComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
