// scope chain -
//Lexical environment is the local memory along with lexical environemnt of it s parent

console.log("code -1");
function a(){
console.log(b);
}
var b =10;
a();

//Scope chain - it can access b inside function a

//eg -2
console.log("code -2");
// c function is lexical inside a function
function a2(){
    
    var b2 = 10;
    c2();
    function c2(){
    console.log(b2);
    }
}

a2();

// output - 10 can access it is also closure for b2,

//eg -3
console.log("code -3");

function a3(){
    var b3 = 10;
    c3();
    function c3(){
    
    }

}
console.log(b3);
a2();
// output - error b3 is not defined
