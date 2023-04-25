//first class functions

//Function statement
function a(){
    console.log("a called");
}

a();

//Function expression

var b = function(){
   console.log("b called");
}
b();

//Named function expression
var b = function xyz(){
    console.log("b called");
 }
 b();

 //First class functions - when a function is passed as argument or when a function is returned then 
 //it is called first class functions

 var b = function(param1){
     return function(){
        console.log("returned fxn");
     }
 }

 function xyz(){

 }
  var c = b(xyz);
  c();
