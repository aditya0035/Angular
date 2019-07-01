interface IPoint{
    x:number
    y:number
    Draw:Object
}

class Pointer implements IPoint{ //this is how we do implementation
    x: number;    
    y: number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y
    }
    Draw=()=>{
        console.log(this.x,this.y)
    };
    GetDistance=(p?:Pointer)=>{ //? mark makes the argument optional and need not to pass always this is how we achieve method overloading
        if(p){
        console.log((p.x-this.x))
        console.log((p.y-this.y));
        }
        else{
            console.log(this.x)
            console.log(this.y)
        }
    }
}

var pointer:Pointer=new Pointer(10,30)
pointer.GetDistance()
pointer.GetDistance(new Pointer(30,40))
