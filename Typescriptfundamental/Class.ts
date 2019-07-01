interface IPoint{
    x:number
    y:number
    Draw:Object
}

class Point implements IPoint{ //this is how we do implementation
    x: number;    
    y: number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y
    }
    Draw=()=>{
        console.log(this.x,this.y)
    };
}

var p:Point=new Point(10,20);
p.Draw();