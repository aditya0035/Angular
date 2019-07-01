import {Pipe,PipeTransform} from '@angular/core'
@Pipe({
name:"Uppercase"
})
export class TrasnformToUpperCase implements PipeTransform{
    transform(value: string, ...args: any[]) {
       let noOfCharcters:number=args[0]
       if(value&& value.length>noOfCharcters)
       {
        return String(value).toUpperCase().slice(0,noOfCharcters)+".....";
       }else if(value){
           return String(value).toUpperCase();
       }
       return value;
    }
    
}