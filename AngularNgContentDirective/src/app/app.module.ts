import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoursesComponent} from './courses/courses.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
