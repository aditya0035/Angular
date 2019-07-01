import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PrintDirctive} from './app.print.directive'
import { AppComponent } from './app.component';
import { PrintmessageDirective } from './printmessage.directive';

@NgModule({
  declarations: [
     AppComponent
    ,PrintDirctive, PrintmessageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
