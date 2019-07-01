import { Directive, HostListener, ElementRef, Input } from "@angular/core";
@Directive({
    selector:"[InputFormatProp]"
})
export class InputFormat{
    @Input('InputFormatProp')
    InputFormatProp;
    constructor(private elementRef:ElementRef){

    }
@HostListener("keyup")
    Onfocus(){
        var TargeElement=<HTMLInputElement>this.elementRef.nativeElement;
        var srcElement=<string>this.InputFormatProp;
        TargeElement.value=srcElement.toUpperCase();
    }
}