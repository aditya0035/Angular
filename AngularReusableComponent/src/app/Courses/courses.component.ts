import {Component,Input} from '@angular/core'
@Component({
    selector:"app-courses",
    templateUrl:"courses.component.html"
})
export class CourseCompoent{
    @Input("email")
    private email:string
    constructor(){ }
}