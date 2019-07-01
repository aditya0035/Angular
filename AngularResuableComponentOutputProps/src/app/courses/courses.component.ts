import {Component, Output,EventEmitter} from '@angular/core'
@Component({
    selector:"app-courses",
    templateUrl:"courses.component.html"
})
export class CoursesComponent{
   @Output("emailChanged") 
    private emailEmitter:EventEmitter<any>=new EventEmitter(false)
    private email:string=null
    SubmitHandler=()=>{
        this.emailEmitter.emit({email:this.email});
    }
}