import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  //template:`<h1>Hello from CourseComponent</h1>`,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private msg:string=null;
  private person:any={
    name:"Aditya"
  }
  GetMessage=()=>{
    return this.msg;
  }
  constructor() {
    console.log(this.person.toString())
    this.msg="This is msg from Courses Component via string interpolation"
    //string interpolcation call .tostring to convert the result to string via calling .toString() over the suppled object
    //in interpolation
   }

  ngOnInit() {
  }

}
