import {Component} from '@angular/core'
@Component({
selector:"app-courses",
templateUrl:"./courses.component.html",
styleUrls:["./courses.component.css"],
})
export class CoursesComponent{
        private msg:string=null;
        constructor(){
            this.msg="Hello From Course"
        }
}