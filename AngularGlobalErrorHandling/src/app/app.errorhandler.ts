import {ErrorHandler} from '@angular/core'

export class AppErrorHanlder implements ErrorHandler{
    handleError(error: any): void {
        console.log(error)
        alert("unexpected error occured")
    }
}