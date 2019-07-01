import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CourseCompoent} from './Courses/courses.component'
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    CourseCompoent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
