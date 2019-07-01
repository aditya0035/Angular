import {Directive,ElementRef,HostListener, Input} from '@angular/core'
@Directive({
selector:"[PrintMessage]"
})
export class PrintDirctive{
    @Input("PrintMessage")
    private _PrintMessage:string;
    @Input("Format")
    private _Format:string
    @HostListener("keyup")
    onkeyup(){
        let element=this._ElementRef.nativeElement;
        console.log(element.value);
        console.log("Format",this._Format,"Print Message",this._PrintMessage)
    }
    constructor(private _ElementRef:ElementRef) {
    }

    
}