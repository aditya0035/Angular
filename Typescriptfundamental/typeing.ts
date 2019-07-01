var counter:number=10
// counter="Aditya" //Error Intelligence support //it will transpile to corresponding js but give error
var a; //here default type is any i.e. it can hold any type of value which is dangerous
a=10;
a="string"

//---------------------------------------------------------------
let b:number
let c:string
let d:object
let e:boolean
let f:any
let g:number[]
let h:any[]=["a","b",1222,function(){console.log("hello World")}]
//----------Enums in Typescript-----------------------------------
enum Color{
    Red=1,
    Blue=2,
    Green=3
}
let blueColor:Color=Color.Blue
//---------Type Asserstion----------------------------------------
let message="string"
let numberVar=10;
let str2:any="Aditya Saraswat"
let str:any
str=(<string>str2).replace("a","t"); //Here the way to do type casting
str=(str2 as string).replace("a","t") ;// as keyword can be used fro type casting also to support type assertion
//Type is determined using the value assigned
//----------------------------------------------------------------
//------------------------Arrow Functions-------------------------
let fn=()=>{console.log("this is function")};
fn();






