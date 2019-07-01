import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.qa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEnvironment';
  message = environment.Message;
}
