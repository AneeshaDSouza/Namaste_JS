//Hoisting is phenomenon in JS where we can access varaibles even before we initialize it
console.log("code 1");
var x = 7;
function getName1() {
    console.log("Namaste JS");
}

console.log(x);
getName1();

//In the above scenario output will be 7 and namaste JS

console.log("code 2");
console.log(y);
getName2();
var y = 7;
function getName2() {
    console.log("Namaste JS");
}
// Here output will be undefined and Namaste JS. since during memory allocation phase undefined and 
//function is stored

//3)
/*
getName3();
console.log(getName3);
console.log(z);

function getName3() {
    console.log("Namaste JS");
}
*/
// output- Namaste JS, , and getname function is printed, uncaught ref: x is not defined code exceution stops

//4) arrow function
/*
getName4();
console.log(getName4);
var getName4 = () =>{
    console.log("Namaste JS");
}
*/
// output - getName4 is not a function error and code execution stops since getName4 behaves as variable here


console.log("code 4.1"); 

console.log(getName5);
var getName5 = () =>{
    console.log("Namaste JS");
}
// output - undefined

console.log("code 4.2");

console.log(getName6);
var getName6 = function(){
    console.log("Namaste JS");
}



