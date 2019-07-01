class Points{
    private x:number
    private y:number
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    ShowCoordinates=()=>{
        console.log(this.x,this.y)
    }
}

var p=new Points(10,23)
p.ShowCoordinates()