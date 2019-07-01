import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TrasnformToUpperCase} from './Pipes/ConvertToUpperCase'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TrasnformToUpperCase
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
