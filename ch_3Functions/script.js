var x =1;
a();
b();// can be invoked because of hoisting
console.log(x);
function a(){
    var x =10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

//output - 10, 100, 1 since a is invoked , Executioncontext of a is created and executed and 10 is 
//logged in console, the EC of a() is popped from call stack , and b's EC is created now and 100 is 
// logged and then popped  and last GEC x value is logged

