import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {AppErrorHanlder} from './app.errorhandler'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide:ErrorHandler,useClass:AppErrorHanlder}],
  bootstrap: [AppComponent]
})
export class AppModule { }
