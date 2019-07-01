//no code will be generated for interfaces
interface IMessga{
    Fname:string
    Lname:string
    age:number
    fullName:object
}

// function DrawPoint(a,b) //user can pass args but can be used for other types
// {

// }
// function DrawPoint({a,b}){ //Now both property belong to same object but user can pass a different object

// }
function DrawPoint(Point:IMessga){

}
DrawPoint({Fname:"Aditya",Lname:"Saraswat",age:25,fullName:()=>{console.log(this.Fname)}});
//---Here we can do like this but there is an issue as per solid principle the DrawPoint Should be
//part of Point class so how we achieve it



