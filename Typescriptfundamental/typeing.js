var counter = 10;
// counter="Aditya" //Error Intelligence support //it will transpile to corresponding js but give error
var a; //here default type is any i.e. it can hold any type of value which is dangerous
a = 10;
a = "string";
//---------------------------------------------------------------
var b;
var c;
var d;
var e;
var f;
var g;
var h = ["a", "b", 1222, function () { console.log("hello World"); }];
//----------Enums in Typescript-----------------------------------
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
var blueColor = Color.Blue;
//---------Type Asserstion----------------------------------------
var message = "string";
var numberVar = 10;
var str2 = "Aditya Saraswat";
var str;
str = str2.replace("a", "t"); //Here the way to do type casting
str = str2.replace("a", "t"); // as keyword can be used fro type casting also to support type assertion
//Type is determined using the value assigned
//----------------------------------------------------------------
//------------------------Arrow Functions-------------------------
var fn = function () { console.log("this is function"); };
fn();
