import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {PostsComponent} from './posts/posts.component'
import {CommentsComponent} from './comments/comments.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostsComponent,
    CommentsComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'posts',component:PostsComponent},
      {path:'comments',component:CommentsComponent},
      {path:'**',component:NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
