import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNgforDirective';
  friends:string[]=["Aditya","Ashish","Anuj","Atul"]
  FriendTrack=(index,element)=>{
    //used to avoid reconstruct DOM
    return 1;
  }

  AddFriend=(friend)=>{
     this.friends.push(friend)
  }
}

